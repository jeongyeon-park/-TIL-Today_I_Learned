import java.util.Scanner;

public class Num2446 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int star = total*2-1;
		int blank = 0;
		
		for(int i=0;i<total;i++) {
			for(int j = blank; j<i ; j++)
				System.out.print(" ");
			for(int k = star; k>0 ; k--)
				System.out.print("*");
			star-=2;
			System.out.println();
		}
		star+=4;
		blank=((total*2-1)-star)/2;
//		System.out.println(star);
		for(int i=total+1 ; i<total*2 ; i++) {
			for(int j=0;j<blank;j++)
				System.out.print(" ");
			for(int k=star;k>0;k--)
				System.out.print("*");
			star+=2;
			blank--;
			System.out.println();
		}
	}
}
