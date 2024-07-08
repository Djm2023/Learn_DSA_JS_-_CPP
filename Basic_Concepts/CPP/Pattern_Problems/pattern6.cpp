// Question 6 :  PRINT THE BELOW PATTERN

//         *
//       * *
//     * * *
//   * * * *
// * * * * *

#include <iostream>
using namespace std;
int main()
{
    for (int row = 1; row <= 5; row++)
    {
        for (int spaces = 1; spaces <= 5 - row; spaces++)
        {
            cout << " ";
        }
        for (int col = 1; col <= row; col++)
        {

            cout << "*";
        }
        cout << endl;
    }
}