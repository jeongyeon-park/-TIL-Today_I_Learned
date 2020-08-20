import java.util.Scanner;

public class Num2442 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int min=total;
		int max=total;
		
		for(int i = total; i>0 ; i--) {
			for(int k=1;k<min;k++) {
				System.out.print(" ");
			}
			for(int j = min ; j<=max; j++) {
				System.out.print("*");
			}
			min--;
			max++;
//			for(int k=max; k<total*2;k++) {
//				System.out.print(" ");
//			}
			System.out.println("");
		}
	}	
}
