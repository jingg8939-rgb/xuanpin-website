#!/bin/bash
set -Eeuo pipefail

COZE_WORKSPACE_PATH="${COZE_WORKSPACE_PATH:-$(pwd)}"

PORT=5000
DEPLOY_RUN_PORT="${DEPLOY_RUN_PORT:-$PORT}"

start_service() {
    cd "${COZE_WORKSPACE_PATH}"
    echo "Starting Next.js service on port ${DEPLOY_RUN_PORT}..."
    PORT=${DEPLOY_RUN_PORT} pnpm next start
}

echo "Starting Next.js service on port ${DEPLOY_RUN_PORT}..."
start_service
