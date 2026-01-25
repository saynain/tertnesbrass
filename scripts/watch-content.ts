#!/usr/bin/env bun
import { watch } from 'fs'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec)
const CONTENT_DIR = 'content'
const DEBOUNCE_MS = 100

let debounceTimer: Timer | null = null
let isGenerating = false

async function regenerateContent(changedFile: string) {
  if (isGenerating) return

  isGenerating = true
  console.log(`\n📝 Content changed: ${changedFile}`)
  console.log('🔄 Regenerating JSON files...\n')

  try {
    const { stdout, stderr } = await execAsync('bun run scripts/generate-content.ts')

    // Show output
    if (stdout) console.log(stdout)
    if (stderr) console.error(stderr)

    // Check if there were any errors in the output
    if (stdout.includes('Error') || stderr.includes('Error')) {
      console.error('\n❌ Generation completed with errors - check output above')
      console.error('💡 Tip: Check your YAML syntax if you see parse errors\n')
    } else {
      console.log('✅ Hot reload complete!\n')
    }
  } catch (error) {
    console.error('❌ Error regenerating content:')
    if (error instanceof Error && 'stdout' in error) {
      console.error((error as any).stdout)
      console.error((error as any).stderr)
    } else {
      console.error(error)
    }
    console.error('\n💡 Tip: Fix the errors above and save the file again\n')
  } finally {
    isGenerating = false
  }
}

function handleChange(filename: string) {
  if (debounceTimer) {
    clearTimeout(debounceTimer)
  }

  debounceTimer = setTimeout(() => {
    regenerateContent(filename)
  }, DEBOUNCE_MS)
}

console.log('👀 Watching content/ directory for changes...\n')

watch(CONTENT_DIR, { recursive: true }, (eventType, filename) => {
  if (filename && !filename.includes('.DS_Store')) {
    handleChange(filename)
  }
})
