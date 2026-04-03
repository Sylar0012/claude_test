import type { PrimeVuePTOptions } from 'primevue/config'

const preset: PrimeVuePTOptions = {
  inputtext: {
    root: { class: 'w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500' },
  },
  password: {
    root: { class: 'w-full' },
    pcInputText: {
      root: { class: 'w-full rounded border border-gray-300 px-3 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500' },
    },
  },
  button: {
    root: { class: 'w-full rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 transition-colors cursor-pointer' },
  },
}

export default preset
