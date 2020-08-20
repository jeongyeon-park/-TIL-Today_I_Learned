import java.util.Scanner;

public class Num11721 {
	public static void main(String[] args) {
		Scanner scanner = new Scanner(System.in);
		String arr=scanner.nextLine();
		String str[]=new String[100];
		for(int i=0;i<arr.length();i++) {
			str[i]=arr.substring(i, i+1);
		}	
		for(int i=0;i<100;i++) {
			if(str[i]==null)
				return;
			if(i%10==0 && i!=0)
				System.out.println();
			System.out.print(str[i]);
		}
	}
}
