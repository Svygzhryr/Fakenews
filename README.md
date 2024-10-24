A small fake (joke) news api powered by AI.

## Installation

1. Clone the repo.

2. `npm i`

3. `npx prisma generate`

4. `npx prisma migrate dev`

And don't forget to set your .env.local according to an example

Also you can seed database with some entries with `npx prisma db seed`

## Usage

`npx prisma studio` to view database entries.

## Api usage

`NEXT_PUBLIC_API_URL/api/posts` endpoint for sending requests
