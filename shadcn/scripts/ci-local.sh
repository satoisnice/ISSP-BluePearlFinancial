#!/bin/bash

# CI Local Dry Run Script
# This script simulates the GitHub Actions CI pipeline locally

set -e  # Exit on error

echo "=========================================="
echo "🚀 Running CI Checks Locally"
echo "=========================================="
echo ""

# Colors for output
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Track failures
FAILURES=0

# Change to shadcn directory
cd "$(dirname "$0")/.."
echo "📁 Working directory: $(pwd)"
echo ""

# Function to run a command and track success/failure
run_check() {
    local name=$1
    local command=$2

    echo "=========================================="
    echo -e "${BLUE}▶️  Running: $name${NC}"
    echo "=========================================="

    if eval "$command"; then
        echo -e "${GREEN}✅ $name PASSED${NC}"
        echo ""
        return 0
    else
        echo -e "${RED}❌ $name FAILED${NC}"
        echo ""
        FAILURES=$((FAILURES + 1))
        return 1
    fi
}

# 1. Install Dependencies
run_check "Install Dependencies" "npm ci" || true

# 2. Run Tests (CI mode)
run_check "Jest Tests (CI mode)" "npm test -- --ci --coverage --maxWorkers=2" || true

# 3. Run Tests (Verbose)
echo "=========================================="
echo -e "${BLUE}▶️  Running: Jest Tests (Verbose)${NC}"
echo "=========================================="
npm test -- --verbose --coverage
echo ""

# 4. Build Project
run_check "Next.js Build" "npm run build" || true

# Summary
echo "=========================================="
echo "📊 CI CHECK SUMMARY"
echo "=========================================="

if [ $FAILURES -eq 0 ]; then
    echo -e "${GREEN}✅ All checks passed! Ready to push to GitHub.${NC}"
    echo ""
    exit 0
else
    echo -e "${RED}❌ $FAILURES check(s) failed. Fix issues before pushing.${NC}"
    echo ""
    exit 1
fi
