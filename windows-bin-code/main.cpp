#include <Windows.h>
//#include <iostream>
#include <string>
#include <stdio.h>
#include <tchar.h>

using namespace std;
VOID startup()
{
   // additional information
   STARTUPINFO si;
   PROCESS_INFORMATION pi;

   // set the size of the structures
   ZeroMemory( &si, sizeof(si) );
   si.cb = sizeof(si);
   ZeroMemory( &pi, sizeof(pi) );

  // start the program up
  CreateProcess("runtime/power-meter.exe",   // the path
    NULL,        // Command line
    NULL,           // Process handle not inheritable
    NULL,           // Thread handle not inheritable
    FALSE,          // Set handle inheritance to FALSE
    0,              // No creation flags
    NULL,           // Use parent's environment block
    NULL,           // Use parent's starting directory
    &si,            // Pointer to STARTUPINFO structure
    &pi            // Pointer to PROCESS_INFORMATION structure
    );
    // Close process and thread handles.
    CloseHandle( pi.hProcess );
    CloseHandle( pi.hThread );
}
main(){

    char ownPth[MAX_PATH];

    // Will contain exe path
    HMODULE hModule = GetModuleHandle(NULL);
    if (hModule != NULL)
    {
     // When passing NULL to GetModuleHandle, it returns handle of exe itself
     GetModuleFileName(hModule,ownPth, (sizeof(ownPth)));
    std::string aux(ownPth);

        int pos = aux.rfind('\\');
    //int pos = aux.rfind('/');


    // Get the path and the name
    std::string path = aux.substr(0,pos+1);
    std::string name = aux.substr(pos+1);
     // Use above module handle to get the path using GetModuleFileName()
int a=SetCurrentDirectory(path.c_str());
//cout << path<<endl;
//system("pause");
startup();
    }
}
