---
description: Ensure .gitignore and README.md are updated after project changes
---

This workflow should be followed whenever any functional changes are made to the codebase.

1. Review the changes made to the source code (`src/`, `package.json`, etc.).
2. Documentation Update (`README.md`):
    - Update the "Features" section if new capabilities were added.
    - Update "Usage" or "Options" if command-line arguments or APIs changed.
    - Check if any screenshots or architecture diagrams need refreshing.
3. Configuration Update (`.gitignore`):
    - If new build tools or temporary files were introduced, add them to `.gitignore`.
    - Ensure sample files or documentation assets are correctly tracked or ignored.
4. Verify that both files accurately reflect the current project state.
