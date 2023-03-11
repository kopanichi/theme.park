
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                                                         
 __     ___    ___ ____ _   _ ___ 
 \ \   / / \  |_ _/ ___| | | |_ _|
  \ \ / / _ \  | | |   | |_| || | 
   \ V / ___ \ | | |___|  _  || | 
    \_/_/   \_\___\____|_| |_|___|
                                    
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
