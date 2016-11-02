//#include <Windows.h>
#include <iostream>
#include <string>
#include <stdio.h>
//#include <tchar.h>
  #include <unistd.h>
#include <stdlib.h>

using namespace std;

main(){

   
 char arg1[20];
        char exepath[30] = {0};

        sprintf( arg1, "/proc/%d/exe", getpid() );
        readlink( arg1, exepath, 1024 );
string ownPth=string(exepath);
    std::string aux(ownPth);

     //   int pos = aux.rfind('\\');
    int pos = aux.rfind('/');


    // Get the path and the name
    std::string path = aux.substr(0,pos+1);
    std::string name = aux.substr(pos+1);
     // Use above module handle to get the path using GetModuleFileName()
int a=chdir(path.c_str());
cout << path<<endl;
//system("pause");
  system("runtime/main");
    
}
