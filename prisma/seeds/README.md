# Database Seeding Structure

## Overview

The seed data has been reorganized into separate files for better maintainability and organization.

## Directory Structure

```
prisma/
├── seeds/
│   ├── companies.js    # Company data (91 companies)
│   ├── jobs.js         # Job posting data (91+ jobs)
│   └── provinces.js    # Thai provinces data (77 provinces)
├── seed-new.js         # Main seed orchestrator
└── seed.js            # Original monolithic seed file (backup)
```

## Files Description

### 📁 `/seeds/companies.js`

- Contains 91 Thai companies across various industries
- Includes tech companies, banks, hospitals, retail chains, etc.
- Each company has: name, email, password (hashed), phone, address

### 📁 `/seeds/jobs.js`

- Contains 91+ job postings from different companies
- Wide range of positions from entry-level to senior roles
- Includes: title, description, requirements, salary, location
- Jobs are linked to companies via `company_id`

### 📁 `/seeds/provinces.js`

- All 77 Thai provinces with official data
- Contains: province code, English name, Thai name
- Required `profile_id` field for schema compliance

### 📁 `/seed-new.js`

- Main orchestrator that imports and seeds all data
- Proper error handling and logging
- Seeds in correct order (provinces → companies → jobs)
- Better progress tracking

## Usage

### Run the new modular seed:

```bash
node prisma/seed-new.js
```

### To use specific seed data in your code:

```javascript
import { companyData } from "./prisma/seeds/companies.js";
import { jobData } from "./prisma/seeds/jobs.js";
import { provinces } from "./prisma/seeds/provinces.js";
```

## Benefits of This Structure

1. **📦 Modularity**: Each table has its own file
2. **🔧 Maintainability**: Easy to update specific data sets
3. **🎯 Focused**: Developers can work on specific data without conflicts
4. **📊 Scalability**: Easy to add new seed files for additional tables
5. **🐛 Debugging**: Easier to identify issues in specific datasets
6. **🔄 Reusability**: Individual seed files can be imported elsewhere

## Adding New Seed Data

1. Create a new file in `/prisma/seeds/` directory
2. Export your data array with a descriptive name
3. Import and add it to `/prisma/seed-new.js`
4. Update this README

## Schema Considerations

- **Province Model**: Has required `profile_id` field (currently set to 1)
- **Company Model**: All required fields are provided
- **JobPost Model**: Linked to companies via foreign key

## Migration from Old Structure

The original `seed.js` file is kept as backup. Once you confirm the new structure works properly, you can:

1. Update your `package.json` seed script to use `seed-new.js`
2. Remove the old `seed.js` file
3. Rename `seed-new.js` to `seed.js`

## Future Enhancements

Consider adding seed files for:

- Users and ProfileUsers
- Skills and Certificates
- WorkExperience and Education
- Bookmarks and Applications
