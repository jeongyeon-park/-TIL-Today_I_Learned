import java.util.Scanner;

public class Nunm2440 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int starnum = scanner.nextInt();
		for(int i=starnum;i!=0;i--) {
			for(int j=i;j!=0;j--)
				System.out.print("*");
			System.out.print("\n");
		}
	}
}
