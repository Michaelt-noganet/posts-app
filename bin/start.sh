#!/usr/bin/env bash

INFO='\033[0;32m'
WARN='\033[1;33m'
ERROR='\033[0;31m'
NC='\033[0m'

  
echo -e "${INFO}#### Start back-end ##########################################################${NC}"
docker compose up -d

echo -e "${INFO}#### Start front-end ##########################################################${NC}"
cd packages/front-main
yarn dev



