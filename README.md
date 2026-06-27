# MotoPose Analyzer 🏍️

<p align="center">
  <img src="public/images/lean-hondo.png" alt="Hondo RR" width="300">
</p>

<p align="center">
  AI-assisted motorcycle riding posture and lean angle analysis.
</p>

---

## Overview

MotoPose Analyzer is a personal project that combines modern web development and computer vision to analyze motorcycle riding photos.

The application aims to help riders better understand their riding posture by extracting body landmarks and calculating riding metrics from uploaded images.

## Features

### Current

- Angular 21
- Angular Material
- Standalone Components
- Welcome Page
- Responsive UI Foundation

### Planned

- Photo Upload
- Image Preview
- Pose Detection
- Lean Angle Calculation
- Rider Posture Analysis
- Analysis History
- Progress Tracking

## Tech Stack

### Frontend

- Angular 21
- Angular Material
- TypeScript
- LESS

### Backend

- ASP.NET Core
- Entity Framework Core
- SQL Server

### AI & Computer Vision

- Python
- MediaPipe
- OpenCV

### DevOps

- Git
- GitHub
- Docker
- Azure

## Architecture

```text
Angular
    ↓
ASP.NET Core API
    ↓
Python Analysis Service
    ↓
MediaPipe / OpenCV
    ↓
Analysis Results
```

## Roadmap

### Phase 1

- Frontend foundation
- Material UI
- Upload flow
- Image preview

### Phase 2

- ASP.NET Core API
- File storage
- SQL Server integration

### Phase 3

- Pose landmark extraction
- Lean angle calculations
- Image annotation

### Phase 4

- Analysis dashboard
- Historical tracking
- Performance comparisons

### Phase 5

- Cloud deployment
- CI/CD pipeline
- Monitoring and logging

## Local Development

Install dependencies:

```bash
npm install
```

Run Angular:

```bash
ng serve
```

Run Test:

```bash
npm run test
```

Run Test on Headless:

```bash
npm run test:headless
```

Open:

```text
http://localhost:4200
```

## Project Status

🚧 In Development

MotoPose Analyzer is currently in the frontend foundation phase and is being developed incrementally from UI → API → AI analysis.
