#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main () {
    printf("Welcome to \"Double It\"!\n");
    int score = 1;
    int choice = 0;
    int win = 0;
    srand(time(NULL));
    while(1){
        if (!score){
            break;
        }
        printf("Current score: %d\n",score);
        printf("Do you wanna double your score?\nEnter 1 or 0: ");
        scanf("%d",&choice);
        if (choice){
            win = !(rand()%4);
            if (win){
                score *= 2;
                printf ("You win! Score doubled!\n");
            }else{
                score = 0;
                printf ("You lose! Score set to zero!\n");
            }
        }else{
            break;
        }
    }
    printf ("Game Over\nFinal Score: %d\n",score);
    return 0;
}