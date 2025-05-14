1. Repeat and check homework
2. Bug registration
3. Jira

## 2. Bug registration
**1. Title**
Tai vienas iš svarbiausių punktų.
Turi būti aiškus, koncentruotas,  perskaičius antraštę turi būti aišku kokia problema rasta.
Pavadinimas turi atsakyti į sekančius klausymus:
    * kas atsitiko?
    * kurioje vietoje?
    * prie kurių aplinkybių?

pvz.E2E: 
    "Amount of 'followers' is missing on the users page when user logged in." 

pvz.API:
    Standartinė situacija, kuri neturi specialių aplinkybiu.
    Nors galima pažymėti, kad "when token is present" arba "when user logged in"
    "Internal Server Error with 200 upon sending GET /admin/users"

**2. Description**
Žingsniai aiškūs, konkretūs, apgalvoti, optimizuoti.  
Pridėti klaidos paveikslėlį, logus ar kitą susietą informaciją, kuri padėtu išanalizuoti defektą.  

Pre-requisites. Pvz.: existing account with followers
pvz.E2E:
    1st stp. Navigate to users page
    2nd stp. Observe amount of followers

    Expected: Amount of followers is visible
    Actual: Amount of followers is not visible

Pre-requisites. Pvz.: existing few users
pvz.API:
    1st stp. Send GET request to /admin/users
    2nd stp. Observe response

    Expected: list of users with response code 200
    Actual: message 'internal server error'  with response code 200

**3. Environment**
OS: Windows
Chrome Version 133.0.6943.142 (Official Build) (64-bit)
Testing environment
Postman

**4. Build version**
Nurodome build versiją, kurioje rastas defektas

**5. Severity**
critical/high/medium/low
Viena problema = vienas užfiksuotas defektas
Labai minimalius-kosmetinius defektus galime registruoti i vieną defektą.


## 3. Jira
https://home.atlassian.com/  

Screenshot apps:  
https://app.prntscr.com/en/tutorials.html  
https://www.screenpresso.com/download/  


