import java.util.Scanner;

public class Num2438 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int starnum = scanner.nextInt();
		for(int i=1; i<=starnum; i++) {
			for(int j=0; j<i; j++)
				System.out.print("*");
			System.out.print("\n");
		}
	}
}
