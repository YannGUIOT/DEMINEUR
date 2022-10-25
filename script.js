const Start_Reset = document.getElementById("start_reset");
const Flags_number = document.getElementById("flags_number");
const Win_Loose_Div = document.getElementById("win_or_loose");

const Difficulty_Select_Color = "chartreuse";
const Difficulty_Default_Color = "rgb(236, 184, 77)";    //"rgb(246, 225, 186)";
const Game_Button_Start_Color = "rgb(130, 80, 23)";
const Game_Button_Flaged_Color = "rgb(242, 242, 76)";
const Game_Button_Played_Color = "rgb(249, 215, 152)";
const Game_Button_Loosed_Color = "red";
const Game_Button_Demined_Color = "rgb(113, 249, 82)";
const Game_Button_Mine_Color = "rgb(166, 166, 166)";

let Game_Difficulty = 0 ;
let Game_Array = [];
let mine_num = 0;
let Total_Mines = 0;
let Game_Open = false;
let flag = "&#9873;";
let analyse_var = 0;
let remaining_flags = 0;
const Test_case = document.getElementById("test");

//******** DIFFICULTY_1, 2 & 3 DECLARATION ********//

function Difficult_declaration()
{
    for ( let n = 1 ; n < 4 ; n++ )
    {
    eval( 'Difficulty_'+n+' = document.getElementById("difficulty_'+n+'");' );
    }
}
Difficult_declaration();

//******** CASE_0, 1, 2, .... 279 DECLARATION ********// 
function Cases_declaration()
{
    for ( let n = 0 ; n < 280 ; n++ ) //*********   l'id  "n"  est déclaré  "case_n"   *******/
    {
    eval( 'case_'+n+' = document.getElementById("'+n+'");' );
    }
}
Cases_declaration();


//******** DIFFICULTY BUTTONS COLOR ********//

function Difficulty(d)
{
    for ( let n = 1 ; n < 4 ; n++ )
    {
    eval( 'Difficulty_'+n+'.style.backgroundColor = Difficulty_Default_Color;');
    }
    eval( 'Difficulty_'+d+'.style.backgroundColor = Difficulty_Select_Color;');
    Game_Difficulty = d ; 
}
Difficulty(1)

//******** GAME_ARRAY_DECLARATION ********// 
function Game_Array_Declaration()
{
    for ( let j = 0 ; j < 280 ; j++ )
    {
        Game_Array.push([0,0,0]);
        eval( 'case_'+j+'.innerHTML = "";');
    }
}
Game_Array_Declaration();

//******** GAME_ARRAY_START_INITIALISATION ********// 
function Game_Array_Start_Reset_Init()
{
    for ( let j = 0 ; j < 280 ; j++ )
    {
        Game_Array[j][0] = 0; // valeur de la case
        Game_Array[j][1] = 0; // nbre de clicks sur la case
        Game_Array[j][2] = 0; // nbre de bombes autours
        eval( 'case_'+j+'.innerHTML = "";');
    }
}

//*********** GAME ARRAY ANALYSE *********//

function Game_Array_Analyse()
{
    analyse_var = 0;
    for ( analyse_var ; analyse_var < 280 ; analyse_var++ )
    {
        if (analyse_var==0){analyse_top_left();}
        else if (analyse_var==13) {analyse_bottom_left();}
        else if (analyse_var==266) {analyse_top_right();}
        else if (analyse_var==279) {analyse_bottom_right();}
        else if (analyse_var==14 || analyse_var==28 || analyse_var==42 || analyse_var==56 || analyse_var==70 || analyse_var==84 || analyse_var==98 || analyse_var==112 || analyse_var==126 || analyse_var==140 || analyse_var==154 || analyse_var==168 || analyse_var==182 || analyse_var==196 || analyse_var==210 || analyse_var==224 || analyse_var==238 || analyse_var==252 )
        {analyse_top();}
        else if (analyse_var==1 || analyse_var==2 || analyse_var==3 || analyse_var==4 || analyse_var==5 || analyse_var==6 || analyse_var==7 || analyse_var==8 || analyse_var==9 || analyse_var==10 || analyse_var==11 || analyse_var==12 )
        {analyse_left();}
        else if (analyse_var==266 || analyse_var==267 || analyse_var==268 || analyse_var==269 || analyse_var==270 || analyse_var==271 || analyse_var==272 || analyse_var==273 || analyse_var==274 || analyse_var==275 || analyse_var==276 || analyse_var==277 || analyse_var==278 )
        {analyse_right();}
        else if (analyse_var==27 || analyse_var==41 || analyse_var==55 || analyse_var==69 || analyse_var==83 || analyse_var==97 || analyse_var==111 || analyse_var==125 || analyse_var==139 || analyse_var==153 || analyse_var==167 || analyse_var==181 || analyse_var==195 || analyse_var==209 || analyse_var==223 || analyse_var==237 || analyse_var==251 || analyse_var==265 )
        {analyse_bottom();}
        else {analyse_center();}
    }
    
}

function analyse_top_left()
{
    var val = 0;
    if (Game_Array[analyse_var+1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+14][0] == "💣") {val++;}
    if (Game_Array[analyse_var+15][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_bottom_left()
{
    var val = 0;
    if (Game_Array[analyse_var-1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+13][0] == "💣") {val++;}
    if (Game_Array[analyse_var+14][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_bottom_right()
{
    var val = 0;
    if (Game_Array[analyse_var-15][0] == "💣") {val++;}
    if (Game_Array[analyse_var-14][0] == "💣") {val++;}
    if (Game_Array[analyse_var-1][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_top_right()
{
    var val = 0;
    if (Game_Array[analyse_var-14][0] == "💣") {val++;}
    if (Game_Array[analyse_var-13][0] == "💣") {val++;}
    if (Game_Array[analyse_var+1][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_top()
{
    var val = 0;
    if (Game_Array[analyse_var-14][0] == "💣") {val++;}
    if (Game_Array[analyse_var-13][0] == "💣") {val++;}
    if (Game_Array[analyse_var+1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+14][0] == "💣") {val++;}
    if (Game_Array[analyse_var+15][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_left()
{
    var val = 0;
    if (Game_Array[analyse_var-1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+13][0] == "💣") {val++;}
    if (Game_Array[analyse_var+14][0] == "💣") {val++;}
    if (Game_Array[analyse_var+15][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_right()
{
    var val = 0;
    if (Game_Array[analyse_var-15][0] == "💣") {val++;}
    if (Game_Array[analyse_var-14][0] == "💣") {val++;}
    if (Game_Array[analyse_var-13][0] == "💣") {val++;}
    if (Game_Array[analyse_var-1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+1][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_bottom()
{
    var val = 0;
    if (Game_Array[analyse_var-15][0] == "💣") {val++;}
    if (Game_Array[analyse_var-14][0] == "💣") {val++;}
    if (Game_Array[analyse_var-1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+13][0] == "💣") {val++;}
    if (Game_Array[analyse_var+14][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}

function analyse_center()
{
    var val = 0;
    if (Game_Array[analyse_var-15][0] == "💣") {val++;}
    if (Game_Array[analyse_var-14][0] == "💣") {val++;}
    if (Game_Array[analyse_var-13][0] == "💣") {val++;}
    if (Game_Array[analyse_var-1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+1][0] == "💣") {val++;}
    if (Game_Array[analyse_var+13][0] == "💣") {val++;}
    if (Game_Array[analyse_var+14][0] == "💣") {val++;}
    if (Game_Array[analyse_var+15][0] == "💣") {val++;}
    Game_Array[analyse_var][2] = val;
}



//******** GAME_ARRAY_RANDOM_MINES ********//

function Game_Array_Random()
{
    Total_Mines = ((Game_Difficulty+1)*20)-10;
    remaining_flags = Total_Mines;
    Display_flags_number();
    let i = 0;
    mine_num = 0;
    while (mine_num != Total_Mines)
    {
        i = Math.floor(Math.random() * 280);
        if (Game_Array[i][0] == 0)
        {
            Game_Array[i][0] = "💣";
            mine_num++;
        }
    }

    // Test_case.innerHTML = "Mine num "+mine_num;
}

//************** CHANGE COLOR ALLS ARRAY GAME BUTTONS *******/

function Change_Alls_Array_Game_Buttons()
{
    for ( let n = 0 ; n < 280 ; n++ )
    {
        eval( 'case_'+n+'.style.backgroundColor = Game_Button_Start_Color;');
    }
}


//******** START_RESET_GAME ********//

function Start_Reset_Game()
{
    Game_Array_Start_Reset_Init();
    Game_Array_Random();
    Game_Array_Analyse();
    Game_Open = true;
    Change_Alls_Array_Game_Buttons();
    Display_flags_number();
    Win_Loose_Div.innerHTML = "";
}

// //******** LISTEN LEFT OR RIGHT MOUSE CLICK EVENT *******//

// let Left_Click = false;
// let Right_Click = false;

// function Listen_click()
// {
//     let click = document.querySelector('#game_screen');
//     click.addEventListener('mouseup', (e) => {
//     switch (e.click) {
//     case 0:
//       Right_Click = false;  
//       Left_Click = true;
//       Test_case.innerHTML = "Left_Click : "+Left_Click;
//       break;
//     case 2:
//       Left_Click = false;
//       Right_Click = true;
//       Test_case.innerHTML = "Left_Right : "+Right_Click;
//       break;
//     }});
// }
// Listen_click();





//******** CLICK_PROCESS ********//

function Click_Process(id_case)
{
    id_case = Number(id_case);
    if (Game_Open === true)
    {
        if (Game_Array[id_case][1] < 3) { Game_Array[id_case][1]++;}  // j'incrémente le nbre de clicks de chaque case
        // Test_case.innerHTML = "Game_Array[case_id][1] : "+Game_Array[case_id][1];

        if (Game_Array[id_case][1] == 1) // si c'est le premier click on affiche le drapeau
        {
        eval( 'case_'+id_case+'.innerHTML = flag;');
        eval( 'case_'+id_case+'.style.backgroundColor = Game_Button_Flaged_Color;');
        }

        if (Game_Array[id_case][1] == 2) { play_case(id_case); }         
    }
    Calculate_Remaining_Flags();
    Display_flags_number();
}

// ************** CALCULATE REMAININGS FLAGS ***************//
function Calculate_Remaining_Flags()
{
    let flags_puts = 0;
    for ( let n = 0 ; n < 280 ; n++ )
    {
        if (Game_Array[n][1] == 1) {flags_puts++;}
    }
    remaining_flags = Total_Mines - flags_puts ;
}



// ***************** DISPLAY FLAGS NUMBER ************** //
function Display_flags_number()
{
    Flags_number.innerHTML = remaining_flags;
}

// ****************** PLAY CASE ****************** //


function play_case(id_case)
{
    if (Game_Array[id_case][0] == "💣") 
    {
        eval( 'case_'+id_case+'.innerHTML = "💣";');
        eval( 'case_'+id_case+'.style.backgroundColor = Game_Button_Loosed_Color;');
        loose_game();
    }
    else
    {   
        if (Game_Array[id_case][2] == 0) 
        {
            play_a_zero_bomb_arround_case(id_case);
        } 
        else 
        {
            eval( 'case_'+id_case+'.innerHTML = Game_Array[id_case][2];'); // on enlève le drapeau et on affiche le nbre de bombes
            eval( 'case_'+id_case+'.style.backgroundColor = Game_Button_Played_Color;'); // on modifie la couleur de fond de la case
        } 
    }
}

function play_a_zero_bomb_arround_case(id_zero_case)
{
    eval( 'case_'+id_zero_case+'.innerHTML = " ";'); // on enleve juste le drapeau
    eval( 'case_'+id_zero_case+'.style.backgroundColor = Game_Button_Played_Color;'); // on modifie la couleur de fond de la case
    play_zero_cases_arround(id_zero_case); // on teste les cases vides autour
    display_zeros_cases();
}

function display_zeros_cases(a,b,c,d,e,f,g,h)
{
    if (a != -1) { eval( 'case_'+a+'.style.backgroundColor = Game_Button_Played_Color;'); }
    if (b != -1) { eval( 'case_'+b+'.style.backgroundColor = Game_Button_Played_Color;'); }
    if (c != -1) { eval( 'case_'+c+'.style.backgroundColor = Game_Button_Played_Color;'); }
    if (d != -1) { eval( 'case_'+d+'.style.backgroundColor = Game_Button_Played_Color;'); }
    if (e != -1) { eval( 'case_'+e+'.style.backgroundColor = Game_Button_Played_Color;'); }
    if (f != -1) { eval( 'case_'+f+'.style.backgroundColor = Game_Button_Played_Color;'); }
    if (g != -1) { eval( 'case_'+g+'.style.backgroundColor = Game_Button_Played_Color;'); }
    if (h != -1) { eval( 'case_'+h+'.style.backgroundColor = Game_Button_Played_Color;'); }
}

function play_zero_cases_arround(x)
{
    if (x==0) {play_zero_cases_in_top_left(x);}
    else if (x==13) {play_zero_cases_in_bottom_left(x);}
    else if (x==266) {play_zero_cases_in_top_right(x);}
    else if (x==279) {play_zero_cases_in_bottom_right(x);}
    else if (x==14 || x==28 || x==42 || x==56 || x==70 || x==84 || x==98 || x==112 || x==126 || x==140 || x==154 || x==168 || x==182 || x==196 || x==210 || x==224 || x==238 || x==252 )
    {play_zero_cases_in_top(x);}
    else if (x==1 || x==2 || x==3 || x==4 || x==5 || x==6 || x==7 || x==8 || x==9 || x==10 || x==11 || x==12 )
    {play_zero_cases_in_left(x);}
    else if (x==266 || x==267 || x==268 || x==269 || x==270 || x==271 || x==272 || x==273 || x==274 || x==275 || x==276 || x==277 || x==278 )
    {play_zero_cases_in_right(x);}
    else if (x==27 || x==41 || x==55 || x==69 || x==83 || x==97 || x==111 || x==125 || x==139 || x==153 || x==167 || x==181 || x==195 || x==209 || x==223 || x==237 || x==251 || x==265 )
    {play_zero_cases_in_bottom(x);}
    else {play_zero_cases_in_center(x);}
}


function play_zero_cases_in_top_left(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x+1][1]!=1 && Game_Array[x+1][2]==0){Game_Array[x+1][1] = 2; a = x+1 ;}
    if (Game_Array[x+14][1]!=1 && Game_Array[x+14][2]==0){Game_Array[x+14][1] = 2; b = x+14 ;}
    if (Game_Array[x+15][1]!=1 && Game_Array[x+15][2]==0){Game_Array[x+15][1] = 2; c = x+15 ;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_bottom_left(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-1][1]!=1 && Game_Array[x-1][2]==0){Game_Array[x-1][1] = 2; a = x-1;}
    if (Game_Array[x+13][1]!=1 && Game_Array[x+13][2]==0){Game_Array[x+13][1] = 2; b = x+13;}
    if (Game_Array[x+14][1]!=1 && Game_Array[x+14][2]==0){Game_Array[x+14][1] = 2; c = x+14;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_bottom_right(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-15][1]!=1 && Game_Array[x-15][2]==0){Game_Array[x-15][1] = 2; a = x-15;}
    if (Game_Array[x-14][1]!=1 && Game_Array[x-14][2]==0){Game_Array[x-14][1] = 2; b = x-14;}
    if (Game_Array[x-1][1]!=1 && Game_Array[x-1][2]==0){Game_Array[x-1][1] = 2; c = x-1;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_top_right(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-14][1]!=1 && Game_Array[x-14][2]==0){Game_Array[x-14][1] = 2; a = x-14;}
    if (Game_Array[x-13][1]!=1 && Game_Array[x-13][2]==0){Game_Array[x-13][1] = 2; b = x-13;}
    if (Game_Array[x+1][1]!=1 && Game_Array[x+1][2]==0){Game_Array[x+1][1] = 2; c = x+1;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_top(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-14][1]!=1 && Game_Array[x-14][2]==0){Game_Array[x-14][1] = 2; a = x-14;}
    if (Game_Array[x-13][1]!=1 && Game_Array[x-13][2]==0){Game_Array[x-13][1] = 2; b = x-13;}
    if (Game_Array[x+1][1]!=1 && Game_Array[x+1][2]==0){Game_Array[x+1][1] = 2; c = x+1;}
    if (Game_Array[x+14][1]!=1 && Game_Array[x+14][2]==0){Game_Array[x+14][1] = 2; d = x+14;}
    if (Game_Array[x+15][1]!=1 && Game_Array[x+15][2]==0){Game_Array[x+15][1] = 2; e = x+15;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_left(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-1][1]!=1 && Game_Array[x-1][2]==0){Game_Array[x-1][1] = 2; a = x-1;}
    if (Game_Array[x+1][1]!=1 && Game_Array[x+1][2]==0){Game_Array[x+1][1] = 2; b = x+1;}
    if (Game_Array[x+13][1]!=1 && Game_Array[x+13][2]==0){Game_Array[x+13][1] = 2; c = x+13;}
    if (Game_Array[x+14][1]!=1 && Game_Array[x+14][2]==0){Game_Array[x+14][1] = 2; d = x+14;}
    if (Game_Array[x+15][1]!=1 && Game_Array[x+15][2]==0){Game_Array[x+15][1] = 2; e = x+15;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_right(x)
{ 
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-15][1]!=1 && Game_Array[x-15][2]==0){Game_Array[x-15][1] = 2; a = x-15;}
    if (Game_Array[x-14][1]!=1 && Game_Array[x-14][2]==0){Game_Array[x-14][1] = 2; b = x-14;}
    if (Game_Array[x-13][1]!=1 && Game_Array[x-13][2]==0){Game_Array[x-13][1] = 2; c = x-13;}
    if (Game_Array[x-1][1]!=1 && Game_Array[x-1][2]==0){Game_Array[x-1][1] = 2; d = x-1;}
    if (Game_Array[x+1][1]!=1 && Game_Array[x+1][2]==0){Game_Array[x+1][1] = 2; e = x+1;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_bottom(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-15][1]!=1 && Game_Array[x-15][2]==0){Game_Array[x-15][1] = 2; a = x-15;}
    if (Game_Array[x-14][1]!=1 && Game_Array[x-14][2]==0){Game_Array[x-14][1] = 2; b = x-14;}
    if (Game_Array[x-1][1]!=1 && Game_Array[x-1][2]==0){Game_Array[x-1][1] = 2; c = x-1;}
    if (Game_Array[x+13][1]!=1 && Game_Array[x+13][2]==0){Game_Array[x+13][1] = 2; d = x+13;}
    if (Game_Array[x+14][1]!=1 && Game_Array[x+14][2]==0){Game_Array[x+14][1] = 2; e = x+14;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}

function play_zero_cases_in_center(x)
{
    a=-1;b=-1;c=-1;d=-1;e=-1;f=-1,g=-1,h=-1;
    if (Game_Array[x-15][1]!=1 && Game_Array[x-15][2]==0){Game_Array[x-15][1] = 2; a = x-15;}
    if (Game_Array[x-14][1]!=1 && Game_Array[x-14][2]==0){Game_Array[x-14][1] = 2; b = x-14;}
    if (Game_Array[x-13][1]!=1 && Game_Array[x-13][2]==0){Game_Array[x-13][1] = 2; c = x-13;}
    if (Game_Array[x-1][1]!=1 && Game_Array[x-1][2]==0){Game_Array[x-1][1] = 2; d = x-1;}
    if (Game_Array[x+1][1]!=1 && Game_Array[x+1][2]==0){Game_Array[x+1][1] = 2; e = x+1;}
    if (Game_Array[x+13][1]!=1 && Game_Array[x+13][2]==0){Game_Array[x+13][1] = 2; f = x+13;}
    if (Game_Array[x+14][1]!=1 && Game_Array[x+14][2]==0){Game_Array[x+14][1] = 2; g = x+14;}
    if (Game_Array[x+15][1]!=1 && Game_Array[x+15][2]==0){Game_Array[x+15][1] = 2; h = x+15;}
    display_zeros_cases(a,b,c,d,e,f,g,h);
}


function loose_game()
{
    Game_Open = false;
    for ( let n = 0 ; n < 280 ; n++ )
    {
        if (Game_Array[n][0] == "💣")
        {
            eval( 'case_'+n+'.innerHTML = "💣";');
            eval( 'case_'+n+'.style.backgroundColor = Game_Button_Mine_Color;');
        }
        if (Game_Array[n][0] == "💣" && Game_Array[n][1] == 1)
        {
            eval( 'case_'+n+'.style.backgroundColor = Game_Button_Demined_Color;');
            eval( 'case_'+n+'.innerHTML = flag;');
        }
        if (Game_Array[n][0] == "💣" && Game_Array[n][1] == 2)
        {
            eval( 'case_'+n+'.style.backgroundColor = Game_Button_Loosed_Color;');
        }
    }

    let total_goods_flags = 0;
    for ( let i=0 ; i < 280 ; i++)
    {
        if (Game_Array[i][0] == "💣" && Game_Array[i][1] == 1) {total_goods_flags++;}
    }
    if (total_goods_flags == Total_Mines) {Win_Loose_Div.innerHTML = "YOU WIN !";}
    else {Win_Loose_Div.innerHTML = "YOU LOOSE !";}
}

//  "💣"
// flag: &#9873;