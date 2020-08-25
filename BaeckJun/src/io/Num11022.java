package io;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Num11022 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String s ="";
		int total = Integer.parseInt(br.readLine());
		for(int i=1 ; i<=total ; i++) {
			s=br.readLine();
			StringTokenizer token = new StringTokenizer(s);
			int a = Integer.parseInt(token.nextToken());
			int b = Integer.parseInt(token.nextToken());
			System.out.printf("Case #%d: %d + %d = %d",i,a,b,(a+b));
			System.out.println();
		}
		br.close();
	}
}
