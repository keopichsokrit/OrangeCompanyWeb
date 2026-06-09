**Project Overview
This is a frontend webbase nextjs app route project. It will use react,typescript, and nextjs in this project. 
    **Important Note**: This project will have next.js server as a backend and postgres db as a database keep that in mind 

**Running the project 
- Only use # pnpm run dev # when I type # run # to run the project
- When I type # close # turn the server off 
- When I type # reset # you need to close the server and turn it back on using # pnpm run dev #

**Language, Library ,and Frameworks
- This project use typesript 
- This project use react DOM 
- This project use tailwindcss(in globals.css)
- This project use react Hook

**Coding rules
- If the component is likely reusable then make it reusable(ex: button is a usable component then create a file for it button.tsx inside of app/component/layout/button.tsx ) 
- Always check component folder before you write code to see and scan for reusable component don't just blindly write it without checking first
- If inside a Route also have it own resuable component then once create a folder inside of app create one more folder inside of that folder name it as component to store component for that specific route(ex: In home we have page.tsx stat-card.tsx or sidebar.tsx as a reusable component then we can create those 2 files inside the compoent folder )