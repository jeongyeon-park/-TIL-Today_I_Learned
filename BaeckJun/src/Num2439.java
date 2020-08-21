import java.util.Scanner;

public class Num2439 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int blank = total - 1;
		int star = 0;
		
		for(int i=1 ; i<=total ; i++) {
			for(int j=blank; j>0 ; j--) 
				System.out.print(" ");
			for(int k=star ; k<i ; k++)
				System.out.print("*");
			blank--;
			System.out.println();
		}
	}
}
