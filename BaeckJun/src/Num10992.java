import java.util.Scanner;

public class Num10992 {

	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		int total = scanner.nextInt();
		int blank=total-1;
		int inner=-1;
		
		for(int i=1; i<total; i++) {
			for(int j=blank; j>0 ; j--) 
				System.out.print(" ");
			System.out.print("*");
			for(int l=inner ; l>0 && i>1 ; l--) 
				System.out.print(" ");
			if(i!=1)
				System.out.print("*");
			inner +=2;
			blank --;
			System.out.println();
		}
		for(int i=1; i<total*2;i++)
			System.out.print("*");
	}
}
