import { example } from '@/js/example'

import webpackLogo from '@/images/webpack-logo.svg'

import '@/styles/index.scss'

const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

const app = document.querySelector('#root')
app.append(logo, heading)
