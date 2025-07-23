# Academia CV

![Academia CV Logo](/example/cv.png)

A **type-safe, React + TypeScript** résumé / curriculum-vitae generator.

*   Declarative **JSON** data model (`src/data.json`).
*   Strict compile-time schema (`src/types/sections.ts`).
*   **Tailwind CSS** for print-ready styling (A4 / Letter).
*   **Vite** dev server & bundler.

---

## 1. Quick Start

```bash
# 1. Install dependencies
pnpm install        # or: npm ci | yarn

# 2. Start hot-reloading dev server
pnpm dev            # => http://localhost:5173
```

Node ≥ 18 is recommended because the project targets **ES2022**.

---

## 2. Editing `data.json`

data.json is located in src
```
Academia-CV
├── src
│   ├── data.json  # ✏️ Edit your CV here
│   └── ...
├── README.md
└── ...
```

`src/data.json` is the single source of truth.
Almost every section is optional; simply omit or set `disabled: true` to hide it.

Example:

```json
{
  "skills": {
    "Toolsets": {
      "Proficient": ["TypeScript", "React"],
      "Familiar":   ["Go", "Docker"]
    }
  }
}
```

---

## 3. Components & Layout

```
src/components
├── Layout
│   ├── Section.tsx       # Shared header / separator wrapper
│   └── Table.tsx         # <Table>, <Table.Th>, <Table.Td>
├── PersonalInformation.tsx
├── Experience.tsx
├── Education.tsx
├── Skills.tsx
└── ...
```

Each component receives a _typed_ slice of the JSON document, keeping the
render layer fully type-safe.

---

## 4. Printing / PDF Export

1. `pnpm build`
2. Open `/dist/index.html` in Chrome or Edge
3. File -> Print ->
   • Layout: **Portrait**
   • Margins: **None** or **Custom**
   • More Settings -> Background graphics **ON**
4. Destination -> "Save as PDF"

The result fits both A4 and US Letter.

---

## 5. Data Model Reference

| Interface | Key | Type | Description |
|-----------|-----|------|-------------|
| **Link** | `name` | `string` | Text to show |
| | `href?` | `string` | Optional URL |
| **Overview** | `description` | `string` | One-liner below the name |
| | `disabled?` | `boolean` | Hide section |
| **Skills** | `disabled?` | `boolean` | Hide entire skills table |
| | `[category]` | `SkillProficiencyMap \| boolean \| undefined` | Free-form grouping (e.g. "Toolsets") |
| **SkillProficiency** | - | `string` | Column header (e.g. "Proficient") |
| **PersonalInformation** | `name` | `string` | Full name |
| | `address?` | [`Link`](#) | City / Country |
| | `email?` | `string` | Visible e-mail |
| | `githubUsername?` | `string \| null` | GitHub handle |
| | `website?` | `string \| null` | Personal website |
| | `linkedin?` | `string` | LinkedIn URL |
| **Summary** | `description` | `string` | Short paragraph |
| | `disabled?` | `boolean` | Hide summary |
| **Education** | `disabled?` | `boolean` | Hide entry |
| | `institution` | [`Link`](#) | School / University |
| | `program?` | `string` | Degree or course |
| | `course?` | `string` | Modules / subjects |
| | `grade?` | `string` | GPA / classification |
| | `year?` | `string` | Dates attended |
| | `additionalInfo?` | `string` | Anything else |
| **Experience** | `company` | `{ name:string; href?:string; extraNote?:string }` | Employer |
| | `location` | `{ name:string; href?:string }` | City / Country |
| | `role?` | `string` | Job title |
| | `start_date?` | `string` | "Jan 2022" |
| | `end_date?` | `string` | "Present" |
| | `points?` | `string[]` | Bullet points |
| | `disabled?` | `boolean` | Hide entry |
| **Achievement** | `name` | `string` | Award or certificate |
| | `result?` | `string` | Score / placement |
| | `type?` | `string` | "Competition", "Certification"… |
| | `href?` | `string` | Evidence link |
| | `disabled?` | `boolean` | Hide achievement |
| **CustomDataItem** | `title` | `{ name:string; extraNote?:string; date?:string }` | Heading |
| | `description` | `string \| string[]` | Paragraph or list |
| | `technologies?` | `string[]` | Tags |
| | `href?` | `string` | Detail link |
| | `disabled?` | `boolean` | Hide |
| **CustomData** | `name` | `string` | Section header |
| | `highlighted?` | `boolean` | Special styling |
| | `disabled?` | `boolean` | Hide section |
| | `items` | `CustomDataItem[]` | Repeated blocks |
| **CVDocument** | See above | Aggregate root for entire JSON file |

---

## 6. Extending the Schema

1. Add or modify interfaces in `src/types/sections.ts`.
2. Update components to consume the new fields.
3. Edit `data.json`; TypeScript will guide you to satisfy the schema.

---

## 7. License

MIT - use this template freely for personal or commercial résumés.

Pull requests are welcome!
Feel free to open an issue if you have suggestions or find a bug.
