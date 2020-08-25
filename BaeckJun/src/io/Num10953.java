package io;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Num10953 {
	public static void main(String[] args) throws IOException {
		BufferedReader br = 
				new BufferedReader(new InputStreamReader(System.in));
		int total = Integer.parseInt(br.readLine());
		String s ="";
		for(int i =0; i<total ; i++) {
			s=br.readLine();
			StringTokenizer token = new StringTokenizer(s,",");
			int a = Integer.parseInt(token.nextToken());
			int b = Integer.parseInt(token.nextToken());
			System.out.println(a+b);
		}
		br.close();
	}
}
