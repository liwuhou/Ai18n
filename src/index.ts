import { checkPackageProject, findAllLocalesJson } from './utils'

const res = checkPackageProject()
console.log('🤔 ~ res:', res)
;(async () => {
  const list = await findAllLocalesJson()
  console.log('🤔 ~ list:', list)
  console.log(123)
})()
