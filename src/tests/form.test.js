import {expect, test} from 'vitest'
import {Accordion} from '../components/Accordition.jsx'

function sum(a, b) {
    return a + b
  }

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  describe("Accordion test", () => {
    test("should show title all the time", () => {
        
        render(<Accordion title='Testing'><h4>Content</h4></Accordion>);

        expect(screen.getByText(/Testing/i)).toBeDefined()
    })
})