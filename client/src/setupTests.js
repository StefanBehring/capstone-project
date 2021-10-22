// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
import '@testing-library/jest-dom'
import { server } from './mocks/server.js'

// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())
