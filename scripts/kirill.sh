#!/usr/bin/env bash
set -euo pipefail

git pull
npm ci
npm run build
npm run dev
