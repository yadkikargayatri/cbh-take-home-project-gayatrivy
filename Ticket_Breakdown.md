# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

The ticket can be breakdown into following tickets:

1. Generate new custom ids associated for each agent
2. Save new ids for agents
3. Generate shits using 'getShiftsByFacility' using new facilities id
4. A function 'generateReport' is called to convert list of shifts to PDF report

Implementation
We can write a new method , generateIds to create custom ids associated with each agents. This new method accepts input as Facility ids and agent id. This method will generate new custom ids for the agents. For every agent , this method will generate the new ids . We can also use hashmap for generating new ids which will act as a values and facilities id are keys. We can access newly generated ids by facilities key
A new table agnetIds will store the two fields such as new ids for agents and facility id so that its easy to map agent and the facilities who is working with that agent.
We can modify the getShiftsByFacility to accepts these new ids , which will generate the shifts for each Agents.
generateReport method is called for the shifts generate in the last which generates reports in the PDF format

Time/efforts 
For creating the custom ids , Time and space complexity will be O(1)