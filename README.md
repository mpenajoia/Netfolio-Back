# Netfolio

## Project Links

- [Deployed](#)
- [Front End](#)
- [Back End](#)


## Project Description

If you're like me and have multiple accounts with different brokerages for your stock investments and different exchanges/wallets for cryptocurrency assets then you know how cumbersome it can be to have to look in multiple applications for an idea of your entire net worth. Netfolio attempts to aid in organizing one's personal investments in one easy to read application. 

## User Story

User will be able to input their stock or crypto asset name/symbol with the amount of shares/tokens they hold plus the amount in USD they invested in said asset. The App will display their holding's value as it related to today's price. User will have a bird's eye view of entire portfolio health. 

## Technologies

React Native preferably for front end, if not, just React
Express and Mongo for the back end

## API(s)

Coingecko.com provides a public API for crypto pricing. 
 - [Coingecko](https://www.coingecko.com/en/api/documentation)

Finnhub.io seems to provide both stock and crypto price, further investigation necessary. 
 - [Finnhub](https://finnhub.io/docs/api/quote)



## Wireframes

- [Wireframe](https://res.cloudinary.com/ds2rdojzc/image/upload/v1639689826/CryptoDreamsApp/Screen_Shot_2021-12-16_at_12.03.09_PM_xx7f4v.png)
- [React Architecture](https://res.cloudinary.com/ds2rdojzc/image/upload/a_270/v1639689844/CryptoDreamsApp/Netfolio_Arch_kxk12c.jpg)


### MVP:

##### V1

- User can input an item with a quantity and value
- User will also input the current market value of item to update pricing
- Calculation will be made to determine Gains or Losses

##### V2

- Back end will be implemented for full CRUD so that user can actually save these assets, edit/update their quantities, or delete their holdings

##### V3

- Instead of user inputting the current market value every time, the live price will be pulled from an API (either one for both stocks and crypto or an API for each)
- Calculations for gains and losses will be made against the fetched data

##### V4 

- User Authentication will be implemented for user to sign in and save their information


#### PostMVP 
- Adding charts like pie charts and line graphs, etc.
- Add an 'other' category for items other than stocks or crypto that the user can fully adjust


## Components

| Component | Description | 
| --- | :---: |  
| App | This will make the initial data pull and include React Router| 
| Header | This will render the header housing the nav and remain across all pages | 
| Footer | This will render the footer and remain across all pages |
| Main | This will render the main content of the Category  Bar, Content, Assets and Charts Components |
| Category Bar | Will render the Stock and Crypto categories to display on the Content Components | 
| Content | Renders the main content of the page, either Charts or Assets |
| Add Asset | Component to allow user to input their asset |
| Assets | Component that will list all the assets |
| Asset | Component to allow for each item to be editable |
| Charts | Component to showcase charting layouts |
| Chart | Individual chart component |
| Options| Will render options to toggle between different charts |


## MVP

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | 
| Making components and linking/routing them correctly | H | 6hrs|  hrs | 
| Main/Content/Footer/Nav | H | 3hrs|  hrs | 
| Taking user input value to run math logic and return results | H | 5hrs|  hrs | 
| Aesthetics/CSS | H | 7hrs|  hrs | 
| Responsiveness | H | 4hrs|  hrs | 
| Correct use of React Hooks | H | 4hrs|  hrs | 
| Correct use of methods | H | 4hrs|  hrs | 
| Pulling Api data | H | 2hrs|  hrs | 
| Populating Api data correctly | H | 5hrs|  hrs | 
| Total | H | 40hrs| hrs |

## Post MVP

| Component | Priority | Estimated Time | Time Invested |
| --- | :---: |  :---: | :---: | 
| Pie charts and other charts | H | 6hrs|  hrs | 
| User Log in | M | 10hrs|  hrs |
| Final tweaks | M | 4hrs | hrs |  
| Total | H | 20hrs| hrs |


Total time: 31.5hrs


## Inspiration
Layout and color palette inspirations
 - [Investments App by Viktor Kogdov](https://www.behance.net/gallery/111508221/Investments-app?tracking_source=search_projects_recommended%7Cstock%20app)
 - [Trading Platform by Gleb Kuznetsov](https://dribbble.com/shots/15258817-Trading-platform-graphic) 
 - [EasyInvest mobile app by Layo](https://dribbble.com/shots/16910736-EasyInvest-mobile-app) 
 - [Bitcoin UI Kit by Maxim Grekov](https://www.behance.net/gallery/62362875/Stock-exchangeBitcoin-UI-Kit-for-Cryptocurrency-Vol-01?tracking_source=search_projects_recommended%7Cstock%20app) 

## Code Snippet

TBD
