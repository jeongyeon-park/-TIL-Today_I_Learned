import java.util.Scanner;

public class Num10991 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int blank=total-1;
		
		for(int i = 1; i<total+1 ; i++) {
			for(int j=blank ; j>0 ; j--)
				System.out.print(" ");
			for(int k=0; k<i ; k++) {
				System.out.print("*");
				System.out.print(" ");
			}
			blank--;
			System.out.println();
		}
	}
}
