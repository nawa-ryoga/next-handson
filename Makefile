up:
	docker compose up -d

bash:
	docker compose exec app bash

down:
	docker compose down

dev:
	docker compose exec app bash -c 'npm run dev'