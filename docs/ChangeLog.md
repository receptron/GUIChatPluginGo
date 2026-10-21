# ChangeLog

## @gui-chat-plugin/go@2.1.1 (2026-10-22)

- **Reject off-board and fractional move coordinates** (#36, fixes #35): `playGo` threw a `TypeError` on a negative or fractional `row`/`col`; such moves now get the invalid-move response. Adds `yarn test` and runs it in CI.

