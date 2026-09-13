# Details and requirements

- user can request a report for market analysis “services”. I guess at first it will be sended on mail.
- user can request tool to download or use it on the website even if it or another website i own it ,so  i redirect him to it.

# Steps of implementation

### Database

- Users
- services
- solutions
- subscriptions



### Backend

- users api for login
- api for services
- apit for products downlaods
- api for subscriptions
- api for payment
- api to take mails if we can’t do something we will handle it on mail
- api for offers

### Frontend

- home page
- service page
- solutions page
- user dashboard
- admin dashboard



## phase 1 :install dependencies
  - Postgres sql
  - Dotenv
  - mongoose
  - swagger
  - jwt
  - config
  - schedule
  - bcrypt
  - typeORM
  - gemini api

## phase 2: connect Database
### -Make Tables:
- solutions
- subscriptions
- Users
- Services
### Details About Tables

1. Users Table

Stores the core authentication and profile information for individuals or 
- accounts.user_id (Primary Key): Unique identifier (e.g., UUID or Auto-increment INT).
- email: Used for login and communication;must be unique and indexed.
- password_hash: Securely salted and hashed password string
- status: Account state (eg., Active, Suspended, Pending Verification)
- created_at / updated_at: Timestamps for account auditing
 
2. Services Table

 Defines the individual atomic offerings, features, or technical components available
 - service_id (Primary Key): Unique identifier for the service
 - name: The display name of the service (eg, "Cloud Storage", "API Access")
 - code / sku: A unique string code used for programmatic identification
 - status: Availability state (eg, Active, Deprecated, Beta)
 - base_price: Cost of the service if sold standalone
 
3. Solutions Table

 Represents bundled services, tiers, or packages tailored for specific customer segments (eg, "Enterprise Bundle", "Starter Pack")
 solution_id (Primary Key): Unique identifier for the bundle
 - name: Name of the tier or package
 - billing_cycle: How often it is billed (eg, Monthly, Annual)
 - price: The total cost of the solution package
 - status: Marketing state (eg, Active, Archived)
 Note: A junction table (solution_services) is typically required to map which multiple service_ids belong to a solution_id

4. Subscriptions Table

 The critical transactional table linking a user to the solution or service they purchased.
 - subscription_id (Primary Key): Unique identifier for the contract
 - user_id (Foreign Key): Links to the Users table
 - solution_id / service_id (Foreign Key): Links to what the user purchased
 - status: Current billing lifecycle state (eg, Active, Past Due, Canceled, Trial)
 - start_date: When the current subscription tier began
 end_date: The expiration or next renewal date
 - payment_gateway_customer_id: Reference token for - payment processors like Stripe or PayPal
 
## phase 2.1:Make the tables in the Entities

## phase 3:create Users
#### -admin
#### -users
#### -superAdmins

## phase 3
1: login & signup
 - signup
 - signin
 - delete user
 - block user
 - escalate user
## phase 3.2
 - add authenticatiosn

## phase 3.3
 - add autherizations
## phase 3.4
- add guards

## phase 3.5
- make the rules work
## phase 4:create Solutions
   - download apps exe
   - saas tools ( may be on diffrent websites)

## phase 5:create services
 - send pdf's 
 - sends data
## phase 5.1 : create rules access

## phase 5.2: authentication and autherization guards on services

## phase 5.3 : guards on services

## phase 6:create subscriptions
 - enable users to get subscribtions

## phase 7:Make first payment
 * connect it to paymob
 * Make the first payment

## phase 8: connect to Ai if possible 
- connect to gemini & i have no plan to enter ai 
- may be a chatbot helps the users to get what they want

# i delte the solution section because i have no plan for it for now but futurely i will look for a way to deploy it . if the project run and get returns.