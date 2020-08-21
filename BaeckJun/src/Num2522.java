import java.util.Scanner;

public class Num2522 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int blank=total-1;
		int star =1;
		
		for(int i = 0; i<total ; i++) {
			for(int j=blank;j>0;j--)
				System.out.print(" ");
			for(int j=star;j>0;j--)
				System.out.print("*");
			blank--;
			star++;
			System.out.println();
		}
		for(int i = 0; i<total-1 ; i++) {
			for(int j=0; j<blank+2;j++)
				System.out.print(" ");
			for(int j=star-1; j>1; j--)
				System.out.print("*");
			blank++;
			star--;
			System.out.println();
		}
	}
}
