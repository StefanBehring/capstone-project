# Datenbank

## User

- id
- username
- email
- password
- role (admin || user)
- points
- verificationCode
- isVerified

## Questions

- id
- question
- correctAnswer
- answers[]
- referenceLink
- user_id (question by)
- correct
- failure
- category_id
- isPending

## Category

- id
- title

## News

- id
- date
- title
- content
- likes[]

## Inbox

- id
- date
- title
- content
- isRead

## Quiz

- id
- user_id
- time
- correct
- failure
- category_id
- questions[{question_id, correct, failure, time}]
- isComplete

## Picture

- id
- filename
- user_id
- isPending
