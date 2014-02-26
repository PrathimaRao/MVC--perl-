#!/usr/bin/perl

#for windows users, how to fix above shebang line
#http://stackoverflow.com/questions/2036577/how-do-i-ignore-the-perl-shebang-on-windows-with-apache-2
use JavaScript::Minifier qw(minify);
use YAML::Tiny;

#Create YAML file
my $yaml = YAML::Tiny->new;

#Open the JS Test Driver conf file

print "argv0: $ARGV[0]\n";
print "argv1: $ARGV[1]\n";
print "argv2: $ARGV[2]\n";

$yaml = YAML::Tiny->read("$ARGV[0]");
print YAML::Tiny->errstr;

$minfile = "";
$cnt = 0;
$line="";
$test = "src-test";

$line = $yaml->[0]->{'load'}->[$cnt];
while( $line )
{
	$line = $yaml->[0]->{'load'}->[$cnt];
	print $cnt."line:".$line."\n";
	if(index($line,$test) < 0 && $line ne "")
	{
		$loc = $line;
		print $cnt."-open file: ".$line."\n";
		open(INFILE, "<",$line) or die;
		print "Compiling " . $loc. "..." . "\n";
		$minfile .= minify(input=>*INFILE);
		close(INFILE);
	}
	$cnt++;
}
open(OUTFILE, ">$ARGV[1]") or die;
print "Minifying to file " . $ARGV[1] . "..." . "\n";
minify(input =>"$minfile", outfile => *OUTFILE);
close(OUTFILE);