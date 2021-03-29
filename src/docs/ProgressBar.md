## v1

### Description

Create a horizontal progress bar at the top of the window that emulates a long or asynchronous request. There's no actual execution progress being tracked so we'll estimate all requests to take a little over 15 seconds.

### Acceptance Criteria

#### Styling

- the bar should be 6px tall and use a gradient that starts orange and ends red
- buttons should match the style below. On hover, button borders should increase to 2px width. On click, the border should increase to 3px.
- [[spiff button image]]

#### Emulating the request

- add a green `Start Request` button to the canvas area that initiates the fake request. This button should change from `Start Request` to `Loading...` while the progress bar is active
- add a red `Finish Request` button to the canvas area that completes the fake request.

#### Animation

- the bar should animate progress from 0% to 90% over 15 seconds
- if the request doesn't finish within 15 seconds, the bar should hang at 90%
- the bar should animate to 100% (in 1 second) when the request finishes regardless of it's current position. It should then disappear 3 seconds later. Bonus: fade the bar away

---

## v2

### Description

In order to make the progress bar appear more realistic, we want to add breakpoints to the bar that will slow the animation when hit.

### Acceptance Criteria

- update the progress bar to accept an array of breakpoints that affect the animation of the progress bar. Progress should animate slower around breakpoints than between them. Each breakpoint will be provided as a number that represents a percentage
- the total progress time can be longer than 15 seconds (if it makes the exercise easier)
- allow the user to toggle between a progress bar with breakpoints and one without
