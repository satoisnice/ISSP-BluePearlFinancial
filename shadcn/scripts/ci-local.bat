@echo off
REM CI Local Dry Run Script for Windows
REM This script simulates the GitHub Actions CI pipeline locally

setlocal enabledelayedexpansion

echo ==========================================
echo ^🚀 Running CI Checks Locally
echo ==========================================
echo.

set FAILURES=0
set SCRIPT_DIR=%~dp0
cd /d "%SCRIPT_DIR%.."

echo ^📁 Working directory: %CD%
echo.

REM 1. Clean previous coverage and build
echo ==========================================
echo ^▶️  Cleaning previous artifacts
echo ==========================================
if exist coverage rmdir /s /q coverage
if exist .next rmdir /s /q .next
echo ✅ Cleaned
echo.

REM 2. Install Dependencies
echo ==========================================
echo ^▶️  Installing Dependencies
echo ==========================================
call npm ci
if errorlevel 1 (
    echo ❌ npm ci FAILED
    set /a FAILURES+=1
) else (
    echo ✅ npm ci PASSED
)
echo.

REM 3. Run Tests (CI mode)
echo ==========================================
echo ^▶️  Running Jest Tests (CI mode)
echo ==========================================
call npm test -- --ci --coverage --maxWorkers=2
if errorlevel 1 (
    echo ❌ Tests FAILED
    set /a FAILURES+=1
) else (
    echo ✅ Tests PASSED
)
echo.

REM 4. Display Coverage Summary
echo ==========================================
echo ^▶️  Coverage Summary
echo ==========================================
if exist coverage\coverage-summary.json (
    type coverage\coverage-summary.json
) else (
    echo No coverage summary found
)
echo.

REM 5. Build Project
echo ==========================================
echo ^▶️  Building Next.js Application
echo ==========================================
call npm run build
if errorlevel 1 (
    echo ❌ Build FAILED
    set /a FAILURES+=1
) else (
    echo ✅ Build PASSED
)
echo.

REM Summary
echo ==========================================
echo ^📊 CI CHECK SUMMARY
echo ==========================================
if !FAILURES! EQU 0 (
    echo ✅ All checks passed! Ready to push to GitHub.
    echo.
    exit /b 0
) else (
    echo ❌ !FAILURES! check(s) failed. Fix issues before pushing.
    echo.
    exit /b 1
)
