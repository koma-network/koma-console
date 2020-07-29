# koma-console
KOMA Console - Authentication & Administration Console <br />
<br />
<table>
<tr>
<td>
<img src="https://user-images.githubusercontent.com/15040338/88755779-17043600-d18c-11ea-9398-a93f2df2328c.jpg" width="25%"></img>
</td>
<td>
<img src="https://user-images.githubusercontent.com/15040338/88760207-c47c4700-d196-11ea-9963-7c9dbdb2b683.jpg" width="25%"></img>
</td>
<td>
<img src="https://user-images.githubusercontent.com/15040338/88760212-cb0abe80-d196-11ea-8b72-cebdf4b79216.jpg" width="25%"></img>
</td>
</tr>
<tr>
<td>
<img src="https://user-images.githubusercontent.com/15040338/88760224-d1993600-d196-11ea-88ca-66602531aa04.jpg" width="25%"></img>
</td>
<td>
<img src="https://user-images.githubusercontent.com/15040338/88760249-dc53cb00-d196-11ea-950d-3a1492727e83.jpg" width="25%"></img>
</td>
<td>
<img src="https://user-images.githubusercontent.com/15040338/88760265-e1b11580-d196-11ea-95a9-5b27c0582e5d.jpg" width="25%"></img>
</td>
</tr>
</table>
<br />
Base Functions : <br />
1. Account Maintenance <br />
2. Subscriber Maintenance <br />
3. MuC & Room Maintenance <br />
4. Session and Subscriber Information <br />
<br />
Requirement : <br />
<br />
1. Install MySQL Server and load file import.sql (for DB Simulation) <br />
3. Change configuration in file koma-console/routes/dao.js for MySQL DB access <br />
4. Change configuration in file koma-console/routes/dao.js for MQTT Broker address <br />
5. Change Security Certificate in directory koma-console/encryption (Optional) <br />
<br />
Run: <br />
<br />
  $npm install <br />
  $npm start <br />
<br />
Try WebApps : https://[ip_address]:3000 <br />
<br />
Username : admin <br />
Password : password <br />
<br />
