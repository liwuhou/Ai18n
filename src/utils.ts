import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { cwd } from 'node:process'
import { existsSync, statSync } from 'node:fs'
import { glob } from 'glob'

export const __dirname = dirname(fileURLToPath(import.meta.url))

export const checkPackageProject = (): boolean => {
  const packagePath = join(cwd(), 'package.json')

  return existsSync(packagePath) && statSync(packagePath).isFile()
}

export const findAllLocalesJson = async (): Promise<string[]> => {
  const localesFiles = await glob(
    ['**/locales/**/*.json', '**/i18n/**/*.json'],
    {
      ignore: 'node_modules/**',
    }
  )

  return localesFiles
}
