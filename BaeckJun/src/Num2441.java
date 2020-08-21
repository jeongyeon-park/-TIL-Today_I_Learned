import java.util.Scanner;

public class Num2441 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int blank=0;
		int star=total;
		
		for(int i=1; i<=total ; i++) {
			for(int j=blank ; j<i-1 && i!=1; j++)
				System.out.print(" ");
			for(int k=star; k>0 ; k--)
				System.out.print("*");
			
			star--;
			System.out.println();
		}
	}
}
