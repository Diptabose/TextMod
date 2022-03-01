function Changelogs(){
 const changelogs=(
   
  <div className="container">
      <h1>Changelogs - TextMod</h1>
      <p>Version : 0.6.1</p>
      <ul>
         <li>Used React framework as frontend.(Single page application)</li>
         <li>Feel the smoothness.  Pages doesn't reload now.</li>
         <li> Files are now structured and modularised.</li>
         <li> Used export Component.</li>
         <li>Used favicons.</li>
         <li>Used Bootstrap for design.</li>
         <li>Build is responsive.Thanks to Bootstrap.</li>
         <li>Added a brief About Page.</li>
         <li>Enabled App wide darkmode.</li>
         <li>Added alerts on operation.</li>
         <li>Added LowerCase , UpperCase , Clipboard copy , Clear and Remove utilities.</li>
         <li>Added time to read , word count and no of characters.</li>
        <li>Added Preview</li>
     </ul>
     <b>Hotfixes:</b>
     <ul>
        <li>Alerts are stable now.  Doesn't move the page down.</li>
        <li>Fixed word and character count counting the spaces.</li>
        <li>Introduced hours and seconds to time to read .</li>
        <li>Utilities are disabled by default. Enabled on entering text.</li>
        <li>Made header sticky</li>
      </ul>
    <p>If you find any bugs , kindly report it here&ensp;<a href="tel:9381327381">9381327381</a></p>
    <p>Lead Developer : Bose </p>
   </div>
   );
return changelogs;
}

export default Changelogs;
