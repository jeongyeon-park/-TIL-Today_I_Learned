import java.util.Scanner;

public class Num2441 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		
		int total=scanner.nextInt();
		for(int i=0;i<total;i++) {
			for(int j=total;j>0;j--) {
				System.out.print('*');
			}
			System.out.print("\n");
			total--;
		}
		
	}
}
