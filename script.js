/*
**	Author: zerico2005 (2023)
**	Project: SDL-Keycode-Scancode-Tool
**	License: MIT License
**	A copy of the MIT License should be included with
**	this project. If not, see https://opensource.org/license/MIT
*/

/* 2023 October 15th */

var Keyboard_Name = ["Esc", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "`<br>~", "1<br>!", "2<br>@", "3<br>#", "4<br>$", "5<br>%", "6<br>^", "7<br>&", "8<br>*", "9<br>(", "0<br>)", "-<br>_", "=<br>+", "Backspace", "Tab |<-<br>    ->|", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[<br>{", "]<br>}", "\\<br>|", "Caps<br>Lock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";<br>:", "\'<br>\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",<br><", ".<br>>", "/<br>?", "Shift", "Ctrl", "Meta", "Alt", "Space Bar", "Alt Gr", "Meta", "Context", "Ctrl", "^<br>|", "<-", "|<br>V", "->", "Prt<br>Scr", "Scr<br>Lock", "Pause<br>Break", "Ins", "Home", "Page<br>Up", "Del", "End", "Page<br>Down", "Num<br>Lock", "/", "*", "-", "7<br>Home", "8^<br> |", "9<br>Pg Up", "+", "<-4", "5", "6->", "1<br>End", "2|<br> V", "3<br>Pg Dn", "Enter", "0<br>Ins", ".<br>Del", "Eject", "Undo", "Cut", "Copy", "Paste", "Vol<br>Mute", "Vol<br>Down", "Vol<br>Up", "Mic<br>Mute", "Media<br>Select", "Brtns<br>Down", "Non<br>US \\", "Help", "Menu", "Again<br>Redo", "Find", "Select", "Return", "Prev<br>|<<", "Play<br>>||", "Next<br>>>|", "Stop<br>[]", "Mail", "Brtns<br>Up", "Non<br>US #", "WWW", "Sys<br>Req", "Sleep", "Power", "Curr<br>Unit", "Curr<br>Sub", "Separ", "Dec<br>Separ", "Thous<br>Separ", "MR", "MS", "MC", "Backspace", "M+", "M-", "/", "*", "Clear", "7<br>Home", "8^<br> |", "9<br>Pg Up", "-", "Clear<br>Entry", "<-4", "5", "6->", "+", "+/-", "1<br>End", "2|<br> V", "3<br>Pg Dn", "%", "0<br>Ins", ".<br>Del", "Enter", "^", "00", "000", "=", "Num<br>Lock", "Eject", "F13", "F14", "F15", "F16", "F17", "F18", "F19", "F20", "F21", "F22", "F23", "F24", "Sys<br>Req", "Sleep", "Power", "Clear", "AC<br>Home", "AC<br>Rfrsh", "AC<br>Stop", "AC<br>BkMrk", "Vol<br>Mute", "Vol<br>Down", "Vol<br>Up", "Mic<br>Mute", "KB Light<br>Down", "KB Light<br>Up", "KB Lt<br>Tog", "Clear<br>Again", "AC<br>Back", "AC<br>Search", "AC<br>Frwd", "Media<br>Select", "Prev<br>|<<", "Play<br>>||", "Next<br>>>|", "Stop<br>[]", "Brightness<br>Down", "Brightness<br>Up", "Help", "Lock<br>Caps", "Lock<br>Num", "Lock<br>Scroll", "Unknown", "CrSel", "Alt<br>Erase", "Exec", "Stop", "Menu", "Out", "ExSel", "Prior", "Oper", "Cancel", "Undo", "Cut", "Copy", "Paste", "Calc", "Mode<br>Switch", "Mail", "Non<br>US \\", "Again<br>Redo", "Find", "Select", "Return", "Comp", "Disp", "WWW", "Non<br>US #", "Currency<br>Unit", "Currency<br>Sub Unit", "Separ", "Dec<br>Separ", "Thous<br>Separ", "Inter<br>1", "Inter<br>2", "Inter<br>3", "Inter<br>4", "Inter<br>5", "Inter<br>6", "Inter<br>7", "Inter<br>8", "Inter<br>9", "Lang<br>1", "Lang<br>2", "Lang<br>3", "Lang<br>4", "Lang<br>5", "Lang<br>6", "Lang<br>7", "Lang<br>8", "Lang<br>9", "Clear", "Clear<br>Entry", "Backspace", "/", "%", "D", "E", "F", "*", "^", "A", "B", "C", "7<br>Home", "8^<br> |", "9<br>Pg Up", "-", "+/-", "<-4", "5", "6->", "+", "Dec", "1<br>End", "2|<br>V", "3<br>Pg Dn", "Hex", "0<br>Ins", ".<br>Del", "Enter", "Oct", "00", "000", "=", "Bin", "MR", "Num<br>Lock", "M/", "MS", "MC", "Equals<br>AS400", "M*", "(", ")", "@", "M-", "{", "}", ":", "M+", "<", ">", "#", "&", "&&", "Space", "|", "||", "Tab", "XOR", "!", ",", "Unknown"];
var Keyboard_posX = [0, 8, 12, 16, 20, 26, 30, 34, 38, 44, 48, 52, 56, 0, 4, 8, 12, 16, 20, 24, 28, 32, 36, 40, 44, 48, 52, 0, 6, 10, 14, 18, 22, 26, 30, 34, 38, 42, 46, 50, 54, 0, 7, 11, 15, 19, 23, 27, 31, 35, 39, 43, 47, 51, 0, 9, 13, 17, 21, 25, 29, 33, 37, 41, 45, 49, 0, 6, 11, 16, 39, 44, 49, 54, 65, 61, 65, 69, 61, 65, 69, 61, 65, 69, 61, 65, 69, 74, 78, 82, 86, 74, 78, 82, 86, 74, 78, 82, 74, 78, 82, 86, 74, 82, 0, 8, 12, 16, 20, 26, 30, 34, 38, 44, 48, 52, 56, 0, 8, 12, 16, 20, 26, 30, 34, 38, 44, 48, 52, 56, 61, 65, 69, 74, 78, 82, 86, 90, 74, 78, 82, 86, 74, 78, 82, 86, 90, 74, 78, 82, 86, 90, 74, 78, 82, 86, 90, 74, 78, 82, 90, 74, 82, 86, 90, 74, 78, 82, 90, 0, 8, 12, 16, 20, 26, 30, 34, 38, 44, 48, 52, 56, 61, 65, 69, 0, 8, 12, 16, 20, 26, 30, 34, 38, 44, 50, 56, 0, 8, 12, 16, 20, 26, 30, 34, 38, 44, 50, 56, 61, 65, 69, 0, 8, 12, 16, 20, 0, 4, 8, 12, 16, 20, 26, 30, 34, 38, 44, 48, 52, 56, 26, 30, 34, 38, 44, 48, 52, 56, 61, 67, 61, 65, 69, 74, 78, 82, 87, 91, 95, 100, 104, 108, 74, 78, 82, 87, 91, 95, 100, 104, 108, 74, 80, 86, 86, 90, 74, 78, 82, 86, 90, 74, 78, 82, 74, 78, 82, 86, 90, 74, 78, 82, 86, 90, 74, 78, 82, 90, 74, 82, 86, 90, 74, 78, 82, 90, 96, 104, 96, 100, 104, 108, 96, 100, 104, 108, 96, 100, 104, 108, 96, 100, 104, 108, 96, 102, 108, 96, 102, 108, 96, 102, 108, 0];
var Keyboard_posY = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 13, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 17, 21, 21, 21, 21, 21, 21, 21, 21, 17, 21, 21, 21, 0, 0, 0, 5, 5, 5, 9, 9, 9, 5, 5, 5, 5, 9, 9, 9, 9, 13, 13, 13, 17, 17, 17, 17, 21, 21, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -9, -5, -5, -5, -9, -9, -9, -9, -9, -3, -3, -3, -3, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 13, 13, 13, 13, 17, 17, 17, 17, 21, 21, 21, 21, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -5, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -10, -14, -14, -14, -14, -14, -14, -14, -14, -14, -14, -14, -14, -14, -14, -14, -23, -23, -23, -23, -23, -19, -19, -19, -19, -19, -19, -19, -19, -19, -19, -19, -19, -19, -19, -23, -23, -23, -23, -23, -23, -23, -23, -19, -19, -23, -23, -23, -19, -19, -19, -19, -19, -19, -19, -19, -19, -14, -14, -14, -14, -14, -14, -14, -14, -14, -7, -7, -7, -3, -3, -3, -3, -3, 1, 1, 1, 1, 1, 5, 5, 5, 5, 5, 9, 9, 9, 9, 9, 13, 13, 13, 13, 17, 17, 17, 17, 21, 21, 21, 21, -7, -7, -3, -3, -3, -3, 1, 1, 1, 1, 5, 5, 5, 5, 9, 9, 9, 9, 13, 13, 13, 17, 17, 17, 21, 21, 21, 0];
var Keyboard_sizeX = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 7, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 9, 9, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 11, 6, 5, 5, 23, 5, 5, 5, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 6, 6, 4, 6, 6, 4, 6, 6, 4, 0];
var Keyboard_sizeY = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0];
var Keyboard_Keycode = ["SDLK_ESCAPE", "SDLK_F1", "SDLK_F2", "SDLK_F3", "SDLK_F4", "SDLK_F5", "SDLK_F6", "SDLK_F7", "SDLK_F8", "SDLK_F9", "SDLK_F10", "SDLK_F11", "SDLK_F12", "SDLK_BACKQUOTE", "SDLK_1", "SDLK_2", "SDLK_3", "SDLK_4", "SDLK_5", "SDLK_6", "SDLK_7", "SDLK_8", "SDLK_9", "SDLK_0", "SDLK_MINUS", "SDLK_EQUALS", "SDLK_BACKSPACE", "SDLK_TAB", "SDLK_q", "SDLK_w", "SDLK_e", "SDLK_r", "SDLK_t", "SDLK_y", "SDLK_u", "SDLK_i", "SDLK_o", "SDLK_p", "SDLK_LEFTBRACKET", "SDLK_RIGHTBRACKET", "SDLK_BACKSLASH", "SDLK_CAPSLOCK", "SDLK_a", "SDLK_s", "SDLK_d", "SDLK_f", "SDLK_g", "SDLK_h", "SDLK_j", "SDLK_k", "SDLK_l", "SDLK_SEMICOLON", "SDLK_QUOTE", "SDLK_RETURN", "SDLK_LSHIFT", "SDLK_z", "SDLK_x", "SDLK_c", "SDLK_v", "SDLK_b", "SDLK_n", "SDLK_m", "SDLK_COMMA", "SDLK_PERIOD", "SDLK_SLASH", "SDLK_RSHIFT", "SDLK_LCTRL", "SDLK_LGUI", "SDLK_LALT", "SDLK_SPACE", "SDLK_RALT", "SDLK_RGUI", "SDLK_APPLICATION", "SDLK_RCTRL", "SDLK_UP", "SDLK_LEFT", "SDLK_DOWN", "SDLK_RIGHT", "SDLK_PRINTSCREEN", "SDLK_SCROLLLOCK", "SDLK_PAUSE", "SDLK_INSERT", "SDLK_HOME", "SDLK_PAGEUP", "SDLK_DELETE", "SDLK_END", "SDLK_PAGEDOWN", "SDLK_NUMLOCKCLEAR", "SDLK_KP_DIVIDE", "SDLK_KP_MULTIPLY", "SDLK_KP_MINUS", "SDLK_KP_7", "SDLK_KP_8", "SDLK_KP_9", "SDLK_KP_PLUS", "SDLK_KP_4", "SDLK_KP_5", "SDLK_KP_6", "SDLK_KP_1", "SDLK_KP_2", "SDLK_KP_3", "SDLK_KP_ENTER", "SDLK_KP_0", "SDLK_KP_PERIOD", "SDLK_EJECT", "SDLK_UNDO", "SDLK_CUT", "SDLK_COPY", "SDLK_PASTE", "SDLK_AUDIOMUTE", "SDLK_VOLUMEDOWN", "SDLK_VOLUMEUP", "SDLK_MUTE", "SDLK_MEDIASELECT", "SDLK_BRIGHTNESSDOWN", "none", "SDLK_HELP", "SDLK_MENU", "SDLK_AGAIN", "SDLK_FIND", "SDLK_SELECT", "SDLK_RETURN2", "SDLK_AUDIOPREV", "SDLK_AUDIOPLAY", "SDLK_AUDIONEXT", "SDLK_AUDIOSTOP", "SDLK_MAIL", "SDLK_BRIGHTNESSUP", "none", "SDLK_WWW", "SDLK_SYSREQ", "SDLK_SLEEP", "SDLK_POWER", "SDLK_CURRENCYUNIT", "SDLK_CURRENCYSUBUNIT", "SDLK_SEPARATOR", "SDLK_DECIMALSEPARATOR", "SDLK_THOUSANDSSEPARATOR", "SDLK_KP_MEMRECALL", "SDLK_KP_MEMSTORE", "SDLK_KP_MEMCLEAR", "SDLK_KP_BACKSPACE", "SDLK_KP_MEMADD", "SDLK_KP_MEMSUBTRACT", "SDLK_KP_DIVIDE", "SDLK_KP_MULTIPLY", "SDLK_KP_CLEAR", "SDLK_KP_7", "SDLK_KP_8", "SDLK_KP_9", "SDLK_KP_MINUS", "SDLK_KP_CLEARENTRY", "SDLK_KP_4", "SDLK_KP_5", "SDLK_KP_6", "SDLK_KP_PLUS", "SDLK_KP_PLUSMINUS", "SDLK_KP_1", "SDLK_KP_2", "SDLK_KP_3", "SDLK_KP_PERCENT", "SDLK_KP_0", "SDLK_KP_PERIOD", "SDLK_KP_ENTER", "SDLK_KP_POWER", "SDLK_KP_00", "SDLK_KP_000", "SDLK_KP_EQUALS", "SDLK_NUMLOCKCLEAR", "SDLK_EJECT", "SDLK_F13", "SDLK_F14", "SDLK_F15", "SDLK_F16", "SDLK_F17", "SDLK_F18", "SDLK_F19", "SDLK_F20", "SDLK_F21", "SDLK_F22", "SDLK_F23", "SDLK_F24", "SDLK_SYSREQ", "SDLK_SLEEP", "SDLK_POWER", "SDLK_CLEAR", "SDLK_AC_HOME", "SDLK_AC_REFRESH", "SDLK_AC_STOP", "SDLK_AC_BOOKMARKS", "SDLK_AUDIOMUTE", "SDLK_VOLUMEDOWN", "SDLK_VOLUMEUP", "SDLK_MUTE", "SDLK_KBDILLUMDOWN", "SDLK_KBDILLUMUP", "SDLK_KBDILLUMTOGGLE", "SDLK_CLEARAGAIN", "SDLK_AC_BACK", "SDLK_AC_SEARCH", "SDLK_AC_FORWARD", "SDLK_MEDIASELECT", "SDLK_AUDIOPREV", "SDLK_AUDIOPLAY", "SDLK_AUDIONEXT", "SDLK_AUDIOSTOP", "SDLK_BRIGHTNESSDOWN", "SDLK_BRIGHTNESSUP", "SDLK_HELP", "none", "none", "none", "SDLK_UNKNOWN", "SDLK_CRSEL", "SDLK_ALTERASE", "SDLK_EXECUTE", "SDLK_STOP", "SDLK_MENU", "SDLK_OUT", "SDLK_EXSEL", "SDLK_PRIOR", "SDLK_OPER", "SDLK_CANCEL", "SDLK_UNDO", "SDLK_CUT", "SDLK_COPY", "SDLK_PASTE", "SDLK_CALCULATOR", "SDLK_MODE", "SDLK_MAIL", "none", "SDLK_AGAIN", "SDLK_FIND", "SDLK_SELECT", "SDLK_RETURN2", "SDLK_COMPUTER", "SDLK_DISPLAYSWITCH", "SDLK_WWW", "none", "SDLK_CURRENCYUNIT", "SDLK_CURRENCYSUBUNIT", "SDLK_SEPARATOR", "SDLK_DECIMALSEPARATOR", "SDLK_THOUSANDSSEPARATOR", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "none", "SDLK_KP_CLEAR", "SDLK_KP_CLEARENTRY", "SDLK_KP_BACKSPACE", "SDLK_KP_DIVIDE", "SDLK_KP_PERCENT", "SDLK_KP_D", "SDLK_KP_E", "SDLK_KP_F", "SDLK_KP_MULTIPLY", "SDLK_KP_POWER", "SDLK_KP_A", "SDLK_KP_B", "SDLK_KP_C", "SDLK_KP_7", "SDLK_KP_8", "SDLK_KP_9", "SDLK_KP_MINUS", "SDLK_KP_PLUSMINUS", "SDLK_KP_4", "SDLK_KP_5", "SDLK_KP_6", "SDLK_KP_PLUS", "SDLK_KP_DECIMAL", "SDLK_KP_1", "SDLK_KP_2", "SDLK_KP_3", "SDLK_KP_HEXADECIMAL", "SDLK_KP_0", "SDLK_KP_PERIOD", "SDLK_KP_ENTER", "SDLK_KP_OCTAL", "SDLK_KP_00", "SDLK_KP_000", "SDLK_KP_EQUALS", "SDLK_KP_BINARY", "SDLK_KP_MEMRECALL", "SDLK_NUMLOCKCLEAR", "SDLK_KP_MEMDIVIDE", "SDLK_KP_MEMSTORE", "SDLK_KP_MEMCLEAR", "SDLK_KP_EQUALSAS400", "SDLK_KP_MEMMULTIPLY", "SDLK_KP_LEFTPAREN", "SDLK_KP_RIGHTPAREN", "SDLK_KP_AT", "SDLK_KP_MEMSUBTRACT", "SDLK_KP_LEFTBRACE", "SDLK_KP_RIGHTBRACE", "SDLK_KP_COLON", "SDLK_KP_MEMADD", "SDLK_KP_LESS", "SDLK_KP_GREATER", "SDLK_KP_HASH", "SDLK_KP_AMPERSAND", "SDLK_KP_DBLAMPERSAND", "SDLK_KP_SPACE", "SDLK_KP_VERTICALBAR", "SDLK_KP_DBLVERTICALBAR", "SDLK_KP_TAB", "SDLK_KP_XOR", "SDLK_KP_EXCLAM", "SDLK_KP_COMMA", "SDLK_UNKNOWN"];
var Keyboard_Scancode = ["SDL_SCANCODE_ESCAPE", "SDL_SCANCODE_F1", "SDL_SCANCODE_F2", "SDL_SCANCODE_F3", "SDL_SCANCODE_F4", "SDL_SCANCODE_F5", "SDL_SCANCODE_F6", "SDL_SCANCODE_F7", "SDL_SCANCODE_F8", "SDL_SCANCODE_F9", "SDL_SCANCODE_F10", "SDL_SCANCODE_F11", "SDL_SCANCODE_F12", "SDL_SCANCODE_GRAVE", "SDL_SCANCODE_1", "SDL_SCANCODE_2", "SDL_SCANCODE_3", "SDL_SCANCODE_4", "SDL_SCANCODE_5", "SDL_SCANCODE_6", "SDL_SCANCODE_7", "SDL_SCANCODE_8", "SDL_SCANCODE_9", "SDL_SCANCODE_0", "SDL_SCANCODE_MINUS", "SDL_SCANCODE_EQUALS", "SDL_SCANCODE_BACKSPACE", "SDL_SCANCODE_TAB", "SDL_SCANCODE_Q", "SDL_SCANCODE_W", "SDL_SCANCODE_E", "SDL_SCANCODE_R", "SDL_SCANCODE_T", "SDL_SCANCODE_Y", "SDL_SCANCODE_U", "SDL_SCANCODE_I", "SDL_SCANCODE_O", "SDL_SCANCODE_P", "SDL_SCANCODE_LEFTBRACKET", "SDL_SCANCODE_RIGHTBRACKET", "SDL_SCANCODE_BACKSLASH", "SDL_SCANCODE_CAPSLOCK", "SDL_SCANCODE_A", "SDL_SCANCODE_S", "SDL_SCANCODE_D", "SDL_SCANCODE_F", "SDL_SCANCODE_G", "SDL_SCANCODE_H", "SDL_SCANCODE_J", "SDL_SCANCODE_K", "SDL_SCANCODE_L", "SDL_SCANCODE_SEMICOLON", "SDL_SCANCODE_APOSTROPHE", "SDL_SCANCODE_RETURN", "SDL_SCANCODE_LSHIFT", "SDL_SCANCODE_Z", "SDL_SCANCODE_X", "SDL_SCANCODE_C", "SDL_SCANCODE_V", "SDL_SCANCODE_B", "SDL_SCANCODE_N", "SDL_SCANCODE_M", "SDL_SCANCODE_COMMA", "SDL_SCANCODE_PERIOD", "SDL_SCANCODE_SLASH", "SDL_SCANCODE_RSHIFT", "SDL_SCANCODE_LCTRL", "SDL_SCANCODE_LGUI", "SDL_SCANCODE_LALT", "SDL_SCANCODE_SPACE", "SDL_SCANCODE_RALT", "SDL_SCANCODE_RGUI", "SDL_SCANCODE_APPLICATION", "SDL_SCANCODE_RCTRL", "SDL_SCANCODE_UP", "SDL_SCANCODE_LEFT", "SDL_SCANCODE_DOWN", "SDL_SCANCODE_RIGHT", "SDL_SCANCODE_PRINTSCREEN", "SDL_SCANCODE_SCROLLLOCK", "SDL_SCANCODE_PAUSE", "SDL_SCANCODE_INSERT", "SDL_SCANCODE_HOME", "SDL_SCANCODE_PAGEUP", "SDL_SCANCODE_DELETE", "SDL_SCANCODE_END", "SDL_SCANCODE_PAGEDOWN", "SDL_SCANCODE_NUMLOCKCLEAR", "SDL_SCANCODE_KP_DIVIDE", "SDL_SCANCODE_KP_MULTIPLY", "SDL_SCANCODE_KP_MINUS", "SDL_SCANCODE_KP_7", "SDL_SCANCODE_KP_8", "SDL_SCANCODE_KP_9", "SDL_SCANCODE_KP_PLUS", "SDL_SCANCODE_KP_4", "SDL_SCANCODE_KP_5", "SDL_SCANCODE_KP_6", "SDL_SCANCODE_KP_1", "SDL_SCANCODE_KP_2", "SDL_SCANCODE_KP_3", "SDL_SCANCODE_KP_ENTER", "SDL_SCANCODE_KP_0", "SDL_SCANCODE_KP_PERIOD", "SDL_SCANCODE_EJECT", "SDL_SCANCODE_UNDO", "SDL_SCANCODE_CUT", "SDL_SCANCODE_COPY", "SDL_SCANCODE_PASTE", "SDL_SCANCODE_AUDIOMUTE", "SDL_SCANCODE_VOLUMEDOWN", "SDL_SCANCODE_VOLUMEUP", "SDL_SCANCODE_MUTE", "SDL_SCANCODE_MEDIASELECT", "SDL_SCANCODE_BRIGHTNESSDOWN", "SDL_SCANCODE_NONUSBACKSLASH", "SDL_SCANCODE_HELP", "SDL_SCANCODE_MENU", "SDL_SCANCODE_AGAIN", "SDL_SCANCODE_FIND", "SDL_SCANCODE_SELECT", "SDL_SCANCODE_RETURN2", "SDL_SCANCODE_AUDIOPREV", "SDL_SCANCODE_AUDIOPLAY", "SDL_SCANCODE_AUDIONEXT", "SDL_SCANCODE_AUDIOSTOP", "SDL_SCANCODE_MAIL", "SDL_SCANCODE_BRIGHTNESSUP", "SDL_SCANCODE_NONUSHASH", "SDL_SCANCODE_WWW", "SDL_SCANCODE_SYSREQ", "SDL_SCANCODE_SLEEP", "SDL_SCANCODE_POWER", "SDL_SCANCODE_CURRENCYUNIT", "SDL_SCANCODE_CURRENCYSUBUNIT", "SDL_SCANCODE_SEPARATOR", "SDL_SCANCODE_DECIMALSEPARATOR", "SDL_SCANCODE_THOUSANDSSEPARATOR", "SDL_SCANCODE_KP_MEMRECALL", "SDL_SCANCODE_KP_MEMSTORE", "SDL_SCANCODE_KP_MEMCLEAR", "SDL_SCANCODE_KP_BACKSPACE", "SDL_SCANCODE_KP_MEMADD", "SDL_SCANCODE_KP_MEMSUBTRACT", "SDL_SCANCODE_KP_DIVIDE", "SDL_SCANCODE_KP_MULTIPLY", "SDL_SCANCODE_KP_CLEAR", "SDL_SCANCODE_KP_7", "SDL_SCANCODE_KP_8", "SDL_SCANCODE_KP_9", "SDL_SCANCODE_KP_MINUS", "SDL_SCANCODE_KP_CLEARENTRY", "SDL_SCANCODE_KP_4", "SDL_SCANCODE_KP_5", "SDL_SCANCODE_KP_6", "SDL_SCANCODE_KP_PLUS", "SDL_SCANCODE_KP_PLUSMINUS", "SDL_SCANCODE_KP_1", "SDL_SCANCODE_KP_2", "SDL_SCANCODE_KP_3", "SDL_SCANCODE_KP_PERCENT", "SDL_SCANCODE_KP_0", "SDL_SCANCODE_KP_PERIOD", "SDL_SCANCODE_KP_ENTER", "SDL_SCANCODE_KP_POWER", "SDL_SCANCODE_KP_00", "SDL_SCANCODE_KP_000", "SDL_SCANCODE_KP_EQUALS", "SDL_SCANCODE_NUMLOCKCLEAR", "SDL_SCANCODE_EJECT", "SDL_SCANCODE_F13", "SDL_SCANCODE_F14", "SDL_SCANCODE_F15", "SDL_SCANCODE_F16", "SDL_SCANCODE_F17", "SDL_SCANCODE_F18", "SDL_SCANCODE_F19", "SDL_SCANCODE_F20", "SDL_SCANCODE_F21", "SDL_SCANCODE_F22", "SDL_SCANCODE_F23", "SDL_SCANCODE_F24", "SDL_SCANCODE_SYSREQ", "SDL_SCANCODE_SLEEP", "SDL_SCANCODE_POWER", "SDL_SCANCODE_CLEAR", "SDL_SCANCODE_AC_HOME", "SDL_SCANCODE_AC_REFRESH", "SDL_SCANCODE_AC_STOP", "SDL_SCANCODE_AC_BOOKMARKS", "SDL_SCANCODE_AUDIOMUTE", "SDL_SCANCODE_VOLUMEDOWN", "SDL_SCANCODE_VOLUMEUP", "SDL_SCANCODE_MUTE", "SDL_SCANCODE_KBDILLUMDOWN", "SDL_SCANCODE_KBDILLUMUP", "SDL_SCANCODE_KBDILLUMTOGGLE", "SDL_SCANCODE_CLEARAGAIN", "SDL_SCANCODE_AC_BACK", "SDL_SCANCODE_AC_SEARCH", "SDL_SCANCODE_AC_FORWARD", "SDL_SCANCODE_MEDIASELECT", "SDL_SCANCODE_AUDIOPREV", "SDL_SCANCODE_AUDIOPLAY", "SDL_SCANCODE_AUDIONEXT", "SDL_SCANCODE_AUDIOSTOP", "SDL_SCANCODE_BRIGHTNESSDOWN", "SDL_SCANCODE_BRIGHTNESSUP", "SDL_SCANCODE_HELP", "SDL_LOCKINGCAPSLOCK", "SDL_SCANCODE_LOCKINGNUMLOCK", "SDL_SCANCODE_LOCKINGSCROLLLOCK", "SDL_SCANCODE_UNKNOWN", "SDL_SCANCODE_CRSEL", "SDL_SCANCODE_ALTERASE", "SDL_SCANCODE_EXECUTE", "SDL_SCANCODE_STOP", "SDL_SCANCODE_MENU", "SDL_SCANCODE_OUT", "SDL_SCANCODE_EXSEL", "SDL_SCANCODE_PRIOR", "SDL_SCANCODE_OPER", "SDL_SCANCODE_CANCEL", "SDL_SCANCODE_UNDO", "SDL_SCANCODE_CUT", "SDL_SCANCODE_COPY", "SDL_SCANCODE_PASTE", "SDL_SCANCODE_CALCULATOR", "SDL_SCANCODE_MODE", "SDL_SCANCODE_MAIL", "SDL_SCANCODE_NONUSBACKSLASH", "SDL_SCANCODE_AGAIN", "SDL_SCANCODE_FIND", "SDL_SCANCODE_SELECT", "SDL_SCANCODE_RETURN2", "SDL_SCANCODE_COMPUTER", "SDL_SCANCODE_DISPLAYSWITCH", "SDL_SCANCODE_WWW", "SDL_SCANCODE_NONUSHASH", "SDL_SCANCODE_CURRENCYUNIT", "SDL_SCANCODE_CURRENCYSUBUNIT", "SDL_SCANCODE_SEPARATOR", "SDL_SCANCODE_DECIMALSEPARATOR", "SDL_SCANCODE_THOUSANDSSEPARATOR", "SDL_SCANCODE_INTERNATIONAL1", "SDL_SCANCODE_INTERNATIONAL2", "SDL_SCANCODE_INTERNATIONAL3", "SDL_SCANCODE_INTERNATIONAL4", "SDL_SCANCODE_INTERNATIONAL5", "SDL_SCANCODE_INTERNATIONAL6", "SDL_SCANCODE_INTERNATIONAL7", "SDL_SCANCODE_INTERNATIONAL8", "SDL_SCANCODE_INTERNATIONAL9", "SDL_SCANCODE_LANG1", "SDL_SCANCODE_LANG2", "SDL_SCANCODE_LANG3", "SDL_SCANCODE_LANG4", "SDL_SCANCODE_LANG5", "SDL_SCANCODE_LANG6", "SDL_SCANCODE_LANG7", "SDL_SCANCODE_LANG8", "SDL_SCANCODE_LANG9", "SDL_SCANCODE_KP_CLEARENTRY", "SDL_SCANCODE_KP_CLEARENTRY", "SDL_SCANCODE_KP_BACKSPACE", "SDL_SCANCODE_KP_DIVIDE", "SDL_SCANCODE_KP_PERCENT", "SDL_SCANCODE_KP_D", "SDL_SCANCODE_KP_E", "SDL_SCANCODE_KP_F", "SDL_SCANCODE_KP_MULTIPLY", "SDL_SCANCODE_KP_POWER", "SDL_SCANCODE_KP_A", "SDL_SCANCODE_KP_B", "SDL_SCANCODE_KP_C", "SDL_SCANCODE_KP_7", "SDL_SCANCODE_KP_8", "SDL_SCANCODE_KP_9", "SDL_SCANCODE_KP_MINUS", "SDL_SCANCODE_KP_PLUSMINUS", "SDL_SCANCODE_KP_4", "SDL_SCANCODE_KP_5", "SDL_SCANCODE_KP_6", "SDL_SCANCODE_KP_PLUS", "SDL_SCANCODE_KP_DECIMAL", "SDL_SCANCODE_KP_1", "SDL_SCANCODE_KP_2", "SDL_SCANCODE_KP_3", "SDL_SCANCODE_KP_HEXADECIMAL", "SDL_SCANCODE_KP_0", "SDL_SCANCODE_KP_PERIOD", "SDL_SCANCODE_KP_ENTER", "SDL_SCANCODE_KP_OCTAL", "SDL_SCANCODE_KP_00", "SDL_SCANCODE_KP_000", "SDL_SCANCODE_KP_EQUALS", "SDL_SCANCODE_KP_BINARY", "SDL_SCANCODE_KP_MEMRECALL", "SDL_SCANCODE_NUMLOCKCLEAR", "SDL_SCANCODE_KP_MEMDIVIDE", "SDL_SCANCODE_KP_MEMSTORE", "SDL_SCANCODE_KP_MEMCLEAR", "SDL_SCANCODE_KP_EQUALSAS400", "SDL_SCANCODE_KP_MEMMULTIPLY", "SDL_SCANCODE_KP_LEFTPAREN", "SDL_SCANCODE_KP_RIGHTPAREN", "SDL_SCANCODE_KP_AT", "SDL_SCANCODE_KP_MEMSUBTRACT", "SDL_SCANCODE_KP_LEFTBRACE", "SDL_SCANCODE_KP_RIGHTBRACE", "SDL_SCANCODE_KP_COLON", "SDL_SCANCODE_KP_MEMADD", "SDL_SCANCODE_KP_LESS", "SDL_SCANCODE_KP_GREATER", "SDL_SCANCODE_KP_HASH", "SDL_SCANCODE_KP_AMPERSAND", "SDL_SCANCODE_KP_DBLAMPERSAND", "SDL_SCANCODE_KP_SPACE", "SDL_SCANCODE_KP_VERTICALBAR", "SDL_SCANCODE_KP_DBLVERTICALBAR", "SDL_SCANCODE_KP_TAB", "SDL_SCANCODE_KP_XOR", "SDL_SCANCODE_KP_EXCLAM", "SDL_SCANCODE_KP_COMMA", "SDL_SCANCODE_UNKNOWN"];

// Start of each keyboard section
var Keyboard_Section = ["SDL_SCANCODE_ESCAPE", 1, "SDL_SCANCODE_GRAVE", 1, "SDL_SCANCODE_PRINTSCREEN", 1, "SDL_SCANCODE_NUMLOCKCLEAR", 1, "SDL_SCANCODE_EJECT", 1, "SDL_SCANCODE_EJECT", 2, "SDL_SCANCODE_UNKNOWN", 2];

function calcMinMaxRatio(val, min, max, ratio) {
    if (val < min) {
        val = min;
    }
    if (val <= max) {
        return val;
    }
    val *= ratio;
    if (val < max) {
        val = max;
    }
    return val;
}

var SDL_Keycode_Text = "";
var SDL_Scancode_Text = "";
var Clicked_Key = 0;

function copyKeycode() { navigator.clipboard.writeText(SDL_Keycode_Text); }
function copyScancode() { navigator.clipboard.writeText(SDL_Scancode_Text); }

function set_Clicked_Key(val) {
    Clicked_Key = val;
}

function print_SDL_Code(val) {
    const SDL_Keycode_Output = document.getElementById("SDL_Keycode_Output");
    const SDL_Scancode_Output = document.getElementById("SDL_Scancode_Output");
    SDL_Keycode_Output.innerHTML = Keyboard_Keycode[val];
    SDL_Scancode_Output.innerHTML = Keyboard_Scancode[val];
    SDL_Keycode_Text = Keyboard_Keycode[val];
    SDL_Scancode_Text = Keyboard_Scancode[val];
    //console.log(Keyboard_Keycode[val], Keyboard_Scancode[val]);
}

document.getElementById("keyboard").addEventListener("mouseout", function(event) { print_SDL_Code(Clicked_Key); });

function copy_SDL_Code() {
    let param = document.getElementById("Auto_Key_Copy").value;
    if (param == 1) {
        copyKeycode();
    } else if (param == 2) {
        copyScancode();
    }
}

function get_Scancode_Position(code, count) {
    let c = 0;
    let p = -1;
    for (let i = 0; i < Keyboard_Scancode.length; i++) {
        if (Keyboard_Scancode[i] == code) {
            p = i;
            c++;
        }
        if (c == count) {
            break;
        }
    }
    return p;
}

function generateKeyboard() {
    const container = document.getElementById("keyboard");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    let len = Keyboard_Name.length;
    let param = document.getElementById("Keyboard_Select").value;
    const Key_Size = 4;
    let corX = 9999; let corY = 9999; // Negative coordinates
    let dimX = 0; let dimY = 0; // Maximum coordinate
    for (let p = 0; p < Keyboard_Section.length - 1; p++) {
        if ((param >> p) % 2 == 0) {
            continue;
        }
        let p_start = get_Scancode_Position(Keyboard_Section[p * 2], Keyboard_Section[p * 2 + 1]);
        let p_end = get_Scancode_Position(Keyboard_Section[(p + 1) * 2], Keyboard_Section[(p + 1) * 2 + 1]);
        for (let i = p_start; i < p_end; i++) { // Find maximums
            if (Keyboard_posX[i] + Keyboard_sizeX[i] > dimX) {
                dimX = Keyboard_posX[i] + Keyboard_sizeX[i];
            }
            if (Keyboard_posY[i] + Keyboard_sizeY[i] > dimY) {
                dimY = Keyboard_posY[i] + Keyboard_sizeY[i];
            }
            if (Keyboard_posX[i] < corX) { corX = Keyboard_posX[i]; }
            if (Keyboard_posY[i] < corY) { corY = Keyboard_posY[i]; }
        }
    }
    corX = -corX; corY = -corY;
    dimX += corX; dimY += corY;

    let Keyboard_Border = 0.5 * Key_Size;
    let Key_Spacing = 0.075 * Key_Size;
    let Key_Offset_Value = Keyboard_Border * 2 - Key_Spacing;

    let resX = window.innerWidth - 24; let resY = window.innerHeight;
    resX = calcMinMaxRatio(resX, 256, 800, 0.7);
    resY = resX * (dimY + Key_Offset_Value) / (dimX + Key_Offset_Value);
    if (resY < 96) { resY = 96; }
    container.style.width = resX + "px";
    container.style.height = resY + "px";


    let scaleFactorX = (resX) / (dimX + Key_Offset_Value);
    let scaleFactorY = (resY) / (dimY + Key_Offset_Value);
    let scaleFactorZ = Math.min(scaleFactorX, scaleFactorY);
    let Key_Border = 0.06 * scaleFactorZ * Key_Size;
    let cornerRadius = scaleFactorZ * Key_Size * 0.2;
    container.style.borderRadius = `${cornerRadius * Keyboard_Border}px`;
    let fontScale = scaleFactorZ * 1.0;
    if (fontScale < 4) {
        fontScale = 4;
    }
    //console.log(scaleFactorZ);
    let offsetX0 = corX + Keyboard_Border;
    let offsetY0 = corY + Keyboard_Border;
    let offsetX1 = -Key_Spacing;
    let offsetY1 = -Key_Spacing;
    for (let p = 0; p < Keyboard_Section.length - 1; p++) {
        if ((param >> p) % 2 == 0) {
            continue;
        }
        let p_start = get_Scancode_Position(Keyboard_Section[p * 2], Keyboard_Section[p * 2 + 1]);
        let p_end = get_Scancode_Position(Keyboard_Section[(p + 1) * 2], Keyboard_Section[(p + 1) * 2 + 1]);
        for (let i = p_start; i < p_end; i++) {
            let x0 = Keyboard_posX[i] + offsetX0; let y0 = Keyboard_posY[i] + offsetY0;
            let x1 = Keyboard_sizeX[i] + offsetX1; let y1 = Keyboard_sizeY[i] + offsetY1;
            x0 *= scaleFactorX; y0 *= scaleFactorY;
            x1 *= scaleFactorX; y1 *= scaleFactorY;
            let box = document.createElement("button");
            box.classList.add("keyboard-key");
            let posX = x0;
            let posY = y0;
            box.style.left = `${posX}px`;
            box.style.top = `${posY}px`;
            if (Keyboard_Name[i].length == 1 && isNaN(Keyboard_Name[i]) == true) {
                box.style.fontSize = `${fontScale * Math.sqrt(2.0)}px`;
            } else {
                box.style.fontSize = `${fontScale}px`;
            }

            let sizeX = x1;
            let sizeY = y1;
            box.style.width = `${sizeX}px`;
            box.style.height = `${sizeY}px`;
            box.style.borderRadius = `${cornerRadius}px`;
            box.style.borderWidth = `${Key_Border}px`;
            box.addEventListener("click", function() { set_Clicked_Key(i); print_SDL_Code(i); copy_SDL_Code(); });
            box.addEventListener("mouseover", function() { print_SDL_Code(i); });
            container.appendChild(box);
            box.innerHTML = Keyboard_Name[i];
        }
    }
}

let STATIC_WindowResX = window.innerWidth;
let STATIC_WindowResY = window.innerHeight;

function checkWindowResize() {
    const resX = window.innerWidth;
    const resY = window.innerHeight;

    if (resX !== STATIC_WindowResX) { // Veritcal resolution does not affect the keyboard
        STATIC_WindowResX = resX;
        STATIC_WindowResX = resY;
        generateKeyboard();
    }
}

document.getElementById("Keyboard_Select").addEventListener("change", function(event) { generateKeyboard(); });
window.addEventListener("resize", checkWindowResize);

window.addEventListener("load", function() { set_Clicked_Key(get_Scancode_Position("SDL_SCANCODE_UNKNOWN",1)); print_SDL_Code(Clicked_Key); generateKeyboard(); });
