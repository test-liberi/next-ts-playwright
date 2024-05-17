## medical recorder app

### Getting Started

1. run `npm install` to install all dependencies.
2. run `npx tsx connect.tsx` to create database.


### API docs
### API docs
| Endpoint | Method | Description | Parameters | Example |
|----------|--------|-------------|------------|---------|
| `/api/drugs` | `GET` | Retrieves all drugs from the database. | None | N/A |
| `/api/drugs` | `POST` | Creates a new drug in the database. | `name_en`, `name_fr`, `Type`, `Category`, `Max_Allowed_Qty`, `Unit`, `Added`, `Description` | `{ "name_en": "Iopamiro 370mg/ml solution for injection 100ml", "name_fr": "Iopamiro 370mg/ml solution for injection 100ml", "Type": "Drug", "Category": "Medicine", "Max_Allowed_Qty": "N/A", "Unit": "Pc(s)", "Added": "2022-12-08", "Description": "Iopamidol 370 mg/ml solution for injection 100ml" }` |
| `/api/drugs` | `PUT` | Updates an existing drug in the database. | `id`, `name_en`, `name_fr`, `Type`, `Category`, `Max_Allowed_Qty`, `Unit`, `Added`, `Description` | `{ "id": 1, "name_en": "Iopamiro 370mg/ml solution for injection 100ml", "name_fr": "Iopamiro 370mg/ml solution for injection 100ml", "Type": "Drug", "Category": "Medicine", "Max_Allowed_Qty": "N/A", "Unit": "Pc(s)", "Added": "2022-12-08", "Description": "Iopamidol 370 mg/ml solution for injection 100ml" }` |
| `/api/drugs` | `DELETE` | Deletes a drug from the database. | `id` | `{ "id": 1 }` |


sample

