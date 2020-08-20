import java.util.Scanner;

public class Num2445 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int min=1;
		int max=total*2-1;
		
		for(int i=0 ; i<total; i++) {
			for(int k=1;k<=min;k++) 
				System.out.print("*");
			for(int j=min;j<max;j++)
				System.out.print(" ");
			for(int k=max+1;k<=total*2;k++) 
				System.out.print("*");
			min++;
			max--;
			System.out.println();
		}

		min = total;
		max=total+1;
		for(int i =1; i<total ; i++) {
			for(int j=1;j<min;j++)
				System.out.print("*");
			for(int k=min;k<=max;k++)
				System.out.print(" ");
			for(int j=max+1;j<=total*2;j++)
				System.out.print("*");
			min--;
			max++;
			System.out.println();
		}
	}
}
