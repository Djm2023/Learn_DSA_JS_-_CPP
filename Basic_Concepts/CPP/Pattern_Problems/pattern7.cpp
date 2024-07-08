// Question 6 :  PRINT THE BELOW PATTERN

//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

#include <iostream>
using namespace std;
int main()
{
    for (int row = 1; row <= 5; row++)
    {
        int count = 1;
        for (int spaces = 1; spaces <= 5 - row; spaces++)
        {
            cout << " ";
        }
        for (int col = 1; col <= row; col++)
        {

            cout << count;
            count++ ;
        }
        cout << endl;
    }
}